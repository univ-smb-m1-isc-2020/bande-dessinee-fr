using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace backend.APIModels
{
    public class MovieHandler
    {
        public string Error { get; set; }
        public int Limit { get; set; }
        public int Offset { get; set; }
        public int Number_of_page_results { get; set; }
        public int Number_of_total_results { get; set; }
        public int Status_code { get; set; }
        public List<Movie> Results { get; set; }
        public string Version { get; set; }
    }
    public class Movie
    {
        [JsonIgnore]
        public object Api_detail_url { get; set; }
        [JsonIgnore]
        public object Box_office_revenue { get; set; }
        [JsonIgnore]
        public object Budget { get; set; }
        [JsonIgnore]
        public object Date_added { get; set; }
        [JsonIgnore]
        public object Date_last_updated { get; set; }
        public string Deck { get; set; }
        public string Description { get; set; }
        [JsonIgnore]
        public object Distributor { get; set; }
        [JsonIgnore]
        public object Has_staff_review { get; set; }
        public int Id { get; set; }
        public Image Image { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public object Producers { get; set; }
        [JsonIgnore]
        public object Rating { get; set; }
        public string Release_date { get; set; }
        [JsonIgnore]
        public object Runtime { get; set; }
        public string Site_detail_url { get; set; }
        public List<Studio> Studios { get; set; }
        [JsonIgnore]
        public object Total_revenue { get; set; }
        [JsonIgnore]
        public object Writers { get; set; }
    }

    public class Studio
    {
        public int Id { get; set; }
        public string Api_detail_url { get; set; }
        public string Name { get; set; }
        public string Site_detail_url { get; set; }
    }
}
