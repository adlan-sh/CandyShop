using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Count { get; set; }
        public string? Icon { get; set; }
        public double CostPer100g { get; set; }
        public string? Category { get; set; }
        public string? Tag { get; set; }

        [NotMapped]
        public string[] Tags => Tag is not null ? Tag.Split(' ', StringSplitOptions.RemoveEmptyEntries) : Array.Empty<string>();
    }
}
