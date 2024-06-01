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
            var admin = await GetAdmin();
            if (admin is null) return Unauthorized();

            _ctx.Products.Add(product);
            await _ctx.SaveChangesAsync();

            return Ok(product.Id);
        }

        [Route("update-product")]
        [HttpPut]
        public async Task<IActionResult> UpdateProduct(Product product)
        {
            var admin = await GetAdmin();
            if (admin is null) return Unauthorized();

            _ctx.Products.Update(product);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("remove-product")]
        [HttpPut]
        public async Task<IActionResult> RemoveProduct(int productId)
        {
            var admin = await GetAdmin();
            if (admin is null) return Unauthorized();

            var product = await _ctx.Products.FirstOrDefaultAsync(p => p.Id == productId && !p.Hidden);
            if (product is null) return NotFound($"Could not find unhidden product with ID {productId}.");

            product.Hidden = true;
            _ctx.Products.Update(product);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("return-product")]
        [HttpPut]
        public async Task<IActionResult> ReturnProduct(int productId)
        {
            var admin = await GetAdmin();
            if (admin is null) return Unauthorized();

            var product = await _ctx.Products.FirstOrDefaultAsync(p => p.Id == productId && p.Hidden);
            if (product is null) return NotFound($"Could not find hidden product with ID {productId}.");

            product.Hidden = false;
            _ctx.Products.Update(product);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        [Route("get-removed-products")]
        [HttpGet]
        public async Task<IActionResult> GetHiddenProducts()
        {
            var admin = await GetAdmin();
            //if (admin is null) return Unauthorized();

            var products = await _ctx.Products
                .Where(p => p.Hidden)
                .ToListAsync();

            return Ok(products);
        }

        protected async Task<User?> GetAdmin()
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
                        var userIdString = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value!;

                        if (!string.IsNullOrEmpty(userIdString))
                        {
                            var userId = int.Parse(userIdString);
                            var user = await _ctx.Users.FirstOrDefaultAsync(u => u.Id == userId);
                            return user;
                        }
                    }
                }
            }

            return null;
        }
    }
}
