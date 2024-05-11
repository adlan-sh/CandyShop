using backend.Data;
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
            if (product is null) return ValidationProblem($"Product with ID {productId} does not exist.")

            var cartItem = new CartItem
            {
                User = user,
                Item = product,
            };
            _ctx.CartItems.Add(cartItem);
            await _ctx.SaveChangesAsync();

            return Ok(true);
        }

        protected User? GetCurrentUser()
        {
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                var userClaims = identity.Claims;

                return new User
                {
                    Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.GivenName)?.Value,
                    Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value!,
                    Id = int.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value!),
                    Role = Enum.Parse<UserRole>(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value!),
                    Login = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Name)?.Value!,
                    Password = "Hidden.",
                };
            }

            return null;
        }
    }
}
