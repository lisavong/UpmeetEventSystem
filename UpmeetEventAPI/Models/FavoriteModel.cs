using System.ComponentModel.DataAnnotations.Schema;

namespace UpmeetEventAPI.Models
{
    public class FavoriteModel 
    {
        public int Id { get; set; }
        public int UserID { get; set; }

        [ForeignKey("EventId")]
        public virtual EventModel Event { get; set; }
    }
}
