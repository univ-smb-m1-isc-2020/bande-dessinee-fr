using System.ComponentModel.DataAnnotations;

namespace backend.APIModels
{
    public class Producer
    {
        public string Api_detail_url { get; set; }
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Site_detail_url { get; set; }
    }
}