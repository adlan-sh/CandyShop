namespace backend.Models
{
    public class OrderedItem
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Product Item { get; set; }
        public OrderStatus Status { get; set; }
    }

    public enum OrderStatus
    {
        Ordered,
        OnTheWay,
        Delivered,
        Recieved
    }
}
