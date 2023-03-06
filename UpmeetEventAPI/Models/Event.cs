using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace UpmeetEventAPI.Models
{
    public class Event
    {
        [Key]
        public int EventID { get; set; }

        public string Date { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Price { get; set; }

        public string Location { get; set; }
    }
}
