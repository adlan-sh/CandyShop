﻿using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace backend.Controllers
{
    [Route("api/user/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _ctx;
        public UserController(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        [Route("get-cart")]
        //[Authorize]
        [HttpGet]
        public async Task<IActionResult> GetCartItems()
        {
            var user = GetCurrentUser();
            if (user is null) return Unauthorized();

            var products = await _ctx.CartItems.Where(ci => ci.User.Id == user.Id).Select(ci => ci.Item).ToListAsync();

            return Ok(products);
        }

        [Route("add-to-cart")]
        [HttpPost]
        public async Task<IActionResult> AddToCart(int productId)
        {
            var user = GetCurrentUser();
            if (user is null) return Unauthorized();

            var product = await _ctx.Products.FirstOrDefaultAsync(p => p.Id == productId);
            if (product is null) return ValidationProblem($"Product with ID {productId} does not exist.");

            var cartItem = new CartItem
            {
                User = user,
                Item = product,
            };
            _ctx.CartItems.Add(cartItem);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("remove-from-cart")]
        [HttpDelete]
        public async Task<IActionResult> RemoveFromCart(int productId)
        {
            var user = GetCurrentUser();
            if (user is null) return Unauthorized();

            var cartItem = await _ctx.CartItems.FirstOrDefaultAsync(ci => ci.User.Id == user.Id && ci.Item.Id == productId);
            if (cartItem is null) return ValidationProblem($"Product with ID {productId} is not present in user's cart.");

            _ctx.CartItems.Remove(cartItem);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("pay")]
        [HttpPost]
        public async Task<IActionResult> Pay(List<Product> products)
        {
            bool successfulPayment = false;
            var user = GetCurrentUser();
            if (user is null) return Unauthorized();

            // payment logic here
            // ......................
            // ......................
            
            if (successfulPayment)
            {
                // removing bought products from user's cart
                // and adding them to ordered items list
                foreach (var product in products)
                {
                    var cartItem = await _ctx.CartItems.FirstOrDefaultAsync(ci => ci.User.Id == user.Id && product.Id == ci.Item.Id);
                    if (cartItem is not null)
                    {
                        _ctx.CartItems.Remove(cartItem);
                        _ctx.OrderedItems.Add(new OrderedItem
                        {
                            Item = product,
                            Status = OrderStatus.Ordered,
                            User = user,
                        });
                    }
                    else Console.WriteLine($"Error: cartItem with product id {product.Id} wasn't found during payment");
                }
                await _ctx.SaveChangesAsync();
            }

            return Ok(successfulPayment);
        }

        [Route("get-code")]
        [HttpGet]
        public async Task<IActionResult> GetPersonalCode()
        {
            var user = GetCurrentUser();
            if (user is null) return Unauthorized();

            var dbUser = await _ctx.Users.FirstOrDefaultAsync(u => u.Id == user.Id);
            if (dbUser is null) return NotFound($"Could not find user with ID {user.Id} in the database.");
            var currentDate = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
            if (dbUser.PersonalCodeGenDate != currentDate)
            {
                dbUser.PersonalCodeGenDate = currentDate;
                dbUser.PersonalCode = dbUser.GeneratePersonalCode();
            }

            return Ok(dbUser.PersonalCode);
        }

        [Route("get-pending-products")]
        [HttpGet]
        public async Task<IActionResult> GetPendingProducts()
        {
            var user = GetCurrentUser();
            if (user is null) return Unauthorized();

            var products = await _ctx.OrderedItems
                .Where(oi => oi.User.Id == user.Id)
                .Select(oi => oi.Item)
                .ToListAsync();

            return Ok(products);
        }

        protected User? GetCurrentUser()
        {
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                var userClaims = identity.Claims;
                var username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.GivenName);

                if (username is not null)
                {
                    return new User
                    {
                        Username = username.Value,
                        Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value!,
                        Id = int.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value!),
                        Role = Enum.Parse<UserRole>(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value!),
                        Login = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Name)?.Value!,
                        Password = "Hidden.",
                    };
                }
            }

            return null;
        }
    }
}
