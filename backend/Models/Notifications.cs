using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Notifications
    {
        [Key]
        public int Id { get; set; }
        public int Utilisateur_id { get; set; }
        public int Movie_id { get; set; }
    }
    public class CreateDeleteNotifications
    {
        public int Utilisateur_id { get; set; }
        public int Movie_id { get; set; }
    }

}
