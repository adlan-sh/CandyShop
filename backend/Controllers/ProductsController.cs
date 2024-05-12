using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/get-products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _ctx;
        public ProductsController(AppDbContext appDbContext)
        {
            _ctx = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _ctx.Products.ToListAsync();

            return Ok(products);
        }
    }
}
