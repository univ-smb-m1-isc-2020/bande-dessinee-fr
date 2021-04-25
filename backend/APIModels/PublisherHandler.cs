using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace backend.APIModels
{
    public class PublisherHandler
    {
        public string Error { get; set; }
        public int Limit { get; set; }
        public int Offset { get; set; }
        public int Number_of_page_results { get; set; }
        public int Number_of_total_results { get; set; }
        [JsonIgnore]
        public object Status_code { get; set; }
        public List<Publisher> Results { get; set; }
        [JsonIgnore]
        public object Version { get; set; }
    }

    public class Publisher
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Image Image { get; set; }
        public string Deck { get; set; }
        public string Description { get; set; }
        [JsonIgnore]
        public object Aliases { get; set; }
        [JsonIgnore]
        public object Api_detail_url { get; set; }
        [JsonIgnore]
        public object Date_added { get; set; }
        [JsonIgnore]
        public object Date_last_updated { get; set; }
        [JsonIgnore]
        public object Location_address { get; set; }
        [JsonIgnore]
        public object Location_city { get; set; }
        [JsonIgnore]
        public object Location_state { get; set; }
        [JsonIgnore]
        public object Site_detail_url { get; set; }
    }
}
