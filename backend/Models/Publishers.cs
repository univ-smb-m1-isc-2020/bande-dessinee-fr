namespace backend.Models
{
    public class Publishers
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Deck { get; set; }
        public string Description { get; set; }
    }
    public class CreatePublishers
    {
        public string Name { get; set; }
        public string Image { get; set; }
        public string Deck { get; set; }
        public string Description { get; set; }
    }
}
