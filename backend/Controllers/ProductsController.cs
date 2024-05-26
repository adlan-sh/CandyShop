﻿using backend.Data;
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
        public async Task<IActionResult> GetAll(int page)
        {
            var products = await _ctx.Products
                .Where(p => !p.Hidden)
                .OrderBy(p => p.Id)
                .Skip(page * ProductsPerPage)
                .Take(ProductsPerPage)
                .ToListAsync();
            var paginationObject = new
            {
                products,
                totalPages = _ctx.Products.Count()/ProductsPerPage,
                currentPage = page
            };
            return Ok(paginationObject);
        }

        const int ProductsPerPage = 4;
    }
}
