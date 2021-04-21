using System.ComponentModel.DataAnnotations;

namespace backend.APIModels
{
    public class Movie
    {
        public string Api_detail_url { get; set; }
        public string Box_office_revenue { get; set; }
        public string Budget { get; set; }
        public string Date_added { get; set; }
        public string Date_last_updated { get; set; }
        public string Deck { get; set; }
        public string Description { get; set; }
        public string Distributor { get; set; }
        public string Has_staff_review { get; set; }
        [Key]
        public int Id { get; set; }
        public Image Image { get; set; }
        public string Name { get; set; }
        public Producer Producers { get; set; }
        public string Rating { get; set; }
        public string Release_date { get; set; }
        public string Runtime { get; set; }
        public string Site_detail_url { get; set; }
        public Studio Studios { get; set; }
        public string Total_revenue { get; set; }
        public Writer Writers { get; set; }
    }
}