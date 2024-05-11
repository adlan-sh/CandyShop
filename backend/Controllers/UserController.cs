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
