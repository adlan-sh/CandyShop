using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _ctx;
        private readonly IConfiguration _config;
        public LoginController(AppDbContext ctx, IConfiguration config)
        {
            _ctx = ctx;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login(string login, string password, bool register, string? email, string? username)
        {
            if (register) return await Register(login, password, email, username);
            else
            {
                var user = await _ctx.Users.FirstOrDefaultAsync(u => u.Login == login);
                if (user is null)
                    return NotFound("User not found");

                if (user.Password != password)
                    return ValidationProblem("Wrong password.");

                var token = GenerateToken(user);

                var userReturn = new
                {
                    token,
                    name = user.Username
                };

                return Ok(userReturn);
            }
        }
        
        protected async Task<IActionResult> Register(string login, string pw, string? email, string? username)
        {
            if (string.IsNullOrEmpty(email)) return ValidationProblem("Email was null. Please, specify an email.");

            var user = new User()
            {
                Login = login,
                Password = pw,
                Email = email,
                Username = username,
                Role = UserRole.Customer,
            };

            var duplicateLoginUser = await _ctx.Users.FirstOrDefaultAsync(u => u.Login == user.Login);
            var duplicateEmailUser = await _ctx.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (duplicateLoginUser != null) return ValidationProblem($"User with login {user.Login} already exists.");
            if (duplicateEmailUser != null) return ValidationProblem($"User with email {user.Email} already exists.");

            _ctx.Users.Add(user);
            await _ctx.SaveChangesAsync();

            var token = GenerateToken(user);

            var userReturn = new
            {
                token,
                name = username
            };

            return Ok(userReturn);
        }

        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:Key"]!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Login),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.Username ?? user.Login),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };

            var token = new JwtSecurityToken(_config["JwtSettings:Issuer"],
                _config["JwtSettings:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(40),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
