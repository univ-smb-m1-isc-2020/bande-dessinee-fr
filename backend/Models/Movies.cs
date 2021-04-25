using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Pagination
    {
        public Pages Pages { get; set; }
        public IEnumerable<Movies> Movies { get; set; }
    }

    public class Movies
    {
        [Key]
        public int Id { get; set; }
        public string Deck { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Release_date { get; set; }
    }

    public class CreateMovies
    {
        public string Deck { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Release_date { get; set; }
    }
    public class GetId
    {
        [Key]
        public int Id { get; set; }

        internal object FirstOrDefault()
        {
            throw new NotImplementedException();
        }
    }
    public class Pages
    {
        public int Nb_Pages { get; set; }
        public int Nb_Items { get; set; }
    }

    public class Movie_Publisher
    {
        public int Id { get; set; }
        public int Movie_id { get; set; }
        public int Publisher_id { get; set; }
    }

    public class CreateMovie_Publisher
    {
        public int Movie_id { get; set; }
        public int Publisher_id { get; set; }
    }
}
