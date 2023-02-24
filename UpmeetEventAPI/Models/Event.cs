using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace UpmeetEventAPI.Models
{
    public class Event
    {
        [Key]
        public int EventID { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        [DefaultValue(0.00)]
        public double Price { get; set; }

        [Required]
        public string Location { get; set; }
    }
}
