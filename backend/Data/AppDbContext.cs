using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<OrderedItem> OrderedItems { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
            builder.Entity<User>()
                .HasIndex(u => u.Login)
                .IsUnique();

            var user = new User
            {
                Id = 1,
                Email = "administrator@candyshop.ru",
                Login = "admin",
                Password = "admin",
                Role = UserRole.Admin,
                Username = "Администратор",
            };
            builder.Entity<User>().HasData(user);
        }
    }
}
