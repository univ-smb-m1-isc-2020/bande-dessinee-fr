using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Utilisateur
    {
        [Key]
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string MotDePasse { get; set; }
    }

    public class CreateUtilisateur
    {
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string MotDePasse { get; set; }
    }

    public class AuthenticateUtilisateur
    {
        public string Email { get; set; }
        public string MotDePasse { get; set; }
    }
    public class RefreshUtilisateur
    {
        public string RefreshToken { get; set; }
    }
    public class Utilisateur_Publisher
    {
        public int Id { get; set; }
        public int Utilisateur_id { get; set; }
        public int Publisher_id { get; set; }
    }

    public class CreateUtilisateur_Publisher
    {
        public int Utilisateur_id { get; set; }
        public int Publisher_id { get; set; }
    }
}
