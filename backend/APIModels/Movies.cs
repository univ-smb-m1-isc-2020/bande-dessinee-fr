using System.Collections.Generic;

namespace backend.APIModels
{
    public class Movies
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
}
