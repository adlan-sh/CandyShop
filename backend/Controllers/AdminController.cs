using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace backend.Controllers
{
    [Route("api/admin/")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _ctx;
        public AdminController(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        [Route("add-product")]
        [HttpPost]
        public async Task<IActionResult> AddProduct(Product product)
        {
            var admin = GetAdmin();
            if (admin is null) return Unauthorized();

            _ctx.Products.Add(product);
            await _ctx.SaveChangesAsync();

            return Ok(product.Id);
        }

        [Route("update-product")]
        [HttpPut]
        public async Task<IActionResult> UpdateProduct(Product product)
        {
            var admin = GetAdmin();
            if (admin is null) return Unauthorized();

            _ctx.Products.Update(product);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("remove-product")]
        [HttpPut]
        public async Task<IActionResult> RemoveProduct(int productId)
        {
            var admin = GetAdmin();
            if (admin is null) return Unauthorized();

            var product = await _ctx.Products.FirstOrDefaultAsync(p => p.Id == productId);
            if (product is null) return NotFound($"Could not find product with ID {productId}.");

            product.Hidden = true;
            _ctx.Products.Update(product);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("get-removed-products")]
        [HttpGet]
        public async Task<IActionResult> GetHiddenProducts()
        {
            var admin = GetAdmin();
            if (admin is null) return Unauthorized();

            var products = await _ctx.Products
                .Where(p => p.Hidden)
                .ToListAsync();

            return Ok(products);
        }

        protected User? GetAdmin()
        {
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                var userClaims = identity.Claims;
                var userRoleStr = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role);
                if (userRoleStr is not null)
                {
                    var userRole = Enum.Parse<UserRole>(userRoleStr.Value);

                    if (userRole == UserRole.Admin)
                    {
                        return new User
                        {
                            Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.GivenName)?.Value,
                            Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value!,
                            Id = int.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value!),
                            Role = userRole,
                            Login = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Name)?.Value!,
                            Password = "Hidden.",
                        };
                    }
                }
            }

            return null;
        }
    }
}
