namespace backend.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public Product Item { get; set; }
        public User User { get; set; }
    }
}
