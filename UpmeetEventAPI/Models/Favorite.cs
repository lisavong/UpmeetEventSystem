using System.ComponentModel.DataAnnotations.Schema;

namespace UpmeetEventAPI.Models
{
    public class Favorite 
    {
        public int Id { get; set; }

        public int UserID { get; set; }
              
        public int EventID { get; set; }
    }
}
