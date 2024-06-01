using backend.Data;
using backend.Models;
using backend.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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
        private readonly PayService _payService;
        public UserController(AppDbContext ctx, PayService payService )
        {
            _ctx = ctx;
            _payService = payService;
        }

        [Route("get-cart")]
        //[Authorize]
        [HttpGet]
        public async Task<IActionResult> GetCartItems()
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            var products = await _ctx.CartItems.Where(ci => ci.User.Id == user.Id).Select(ci => new { ci.Id, ci.Item, ci.CountInCart }).ToListAsync();

            return Ok(products);
        }

        [Route("get-user")]
        //[Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            var returnUserData = new
            {
                name = user.Username,
                email = user.Email
            };

            return Ok(returnUserData);
        }

        [Route("add-to-cart")]
        [HttpPost]
        public async Task<IActionResult> AddToCart(int productId)
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            var product = await _ctx.Products.FirstOrDefaultAsync(p => p.Id == productId);
            if (product is null) return ValidationProblem($"Product with ID {productId} does not exist.");

            var existingCartItem = await _ctx.CartItems
                .FirstOrDefaultAsync(ci => ci.Item.Id == product.Id && ci.User.Id == user.Id);
            if (existingCartItem != null)
            {
                existingCartItem.CountInCart++;
                _ctx.CartItems.Update(existingCartItem);
            }
            else
            {
                var cartItem = new CartItem
                {
                    User = user,
                    Item = product,
                    CountInCart = 1,
                };
                _ctx.CartItems.Add(cartItem);
            }

            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("remove-from-cart")]
        [HttpDelete]
        public async Task<IActionResult> RemoveFromCart(int productId)
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            var cartItem = await _ctx.CartItems.FirstOrDefaultAsync(ci => ci.User.Id == user.Id && ci.Item.Id == productId);
            var product = await _ctx.Products.FirstOrDefaultAsync(p => p.Id == productId);
            cartItem.Item = product;
            if (cartItem is null) return ValidationProblem($"Product with ID {productId} is not present in user's cart.");

            _ctx.CartItems.Remove(cartItem);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("pay")]
        [HttpPost]
        public async Task<IActionResult> Pay(List<Product> products)
        {
            string paymentId = "2dec2371-000f-5000-a000-139045e74ef8";
            bool successfulPayment = _payService.CheckPayment(paymentId);
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            
            if (successfulPayment)
            {
                //removing bought products from user's cart
                // and adding them to ordered items list
                foreach (var product in products)
                {
                    var productDb = _ctx.Products.FirstOrDefault(p => p.Id == product.Id);
                    var cartItem = await _ctx.CartItems.FirstOrDefaultAsync(ci => ci.User.Id == user.Id && productDb.Id == ci.Item.Id);
                    /*if (cartItem is not null)
                    {*/
                        //_ctx.CartItems.Remove(cartItem);
                        _ctx.OrderedItems.Add(new OrderedItem
                        {
                            Item = productDb,
                            Status = OrderStatus.Ordered,
                            User = user,
                        });
                   /* }
                    else Console.WriteLine($"Error: cartItem with product id {product.Id} wasn't found during payment");*/
                }
                await _ctx.SaveChangesAsync();
            }

            return Ok(successfulPayment);
        }

        [Route("get-code")]
        [HttpGet]
        public async Task<IActionResult> GetPersonalCode()
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            var currentDate = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
            if (user.PersonalCodeGenDate != currentDate)
            {
                user.PersonalCodeGenDate = currentDate;
                user.PersonalCode = user.GeneratePersonalCode();
            }

            return Ok(user.PersonalCode);
        }

        [Route("get-pending-products")]
        [HttpGet]
        public async Task<IActionResult> GetPendingProducts()
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            var products = await _ctx.OrderedItems
                .Where(oi => oi.User.Id == user.Id)
                .Select(oi => oi.Item)
                .ToListAsync();

            return Ok(products);
        }

        [Route("change-cart-item-count")]
        [HttpPost]
        public async Task<IActionResult> ChangeCartItemCount(int productId, int newCount)
        {
            var user = await GetCurrentUser();
            if (user is null) return Unauthorized();

            if (newCount <= 0)
            {
                return await RemoveFromCart(productId);
            }

            var cartItem = await _ctx.CartItems
                .SingleOrDefaultAsync(ci => ci.Item.Id == productId && ci.User.Id == user.Id);
            if (cartItem is null) return ValidationProblem($"Could not find CartItem with productId = {productId}");

            cartItem.CountInCart = newCount;    

            _ctx.CartItems.Update(cartItem);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        protected async Task<User?> GetCurrentUser()
        {
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                var userClaims = identity.Claims;
                var userIdString = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value!;

                if (!string.IsNullOrEmpty(userIdString))
                {
                    var userId = int.Parse(userIdString);
                    var user = await _ctx.Users.FirstOrDefaultAsync(u => u.Id == userId);
                    return user;
                }
            }

            return null;
        }
    }
}
