using System.Collections.Generic;

namespace backend.Models
{

    public class PaginationPublisher
    {
        public Pages Pages { get; set; }
        public IEnumerable<Publishers> Publishers { get; set; }
    }
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
