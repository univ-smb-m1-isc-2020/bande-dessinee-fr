using backend.APIModels;
using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend
{
    [Route("[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly MoviesRepository moviesRepository;
        private readonly PublishersRepository publishersRepository;
        private readonly Movie_PublisherRepository movie_PublisherRepository;
        private readonly IConfiguration _config;
        static HttpClient _client;
        public AdminController(IConfiguration config)
        {
            _config = config;
            moviesRepository = new MoviesRepository(_config);
            publishersRepository = new PublishersRepository(_config);
            movie_PublisherRepository = new Movie_PublisherRepository(_config);
            HttpClient client = new HttpClient
            {
                BaseAddress = new Uri("https://comicvine.gamespot.com")
            };
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
            _client = client;

        }
        // GET: api/<AdminController>
        [HttpGet]
        public async Task<string> Get([FromQuery] string password, [FromQuery] string database, [FromQuery] int offset)
        {
            var res = "petit malin tu passera pas";
            if (password == "123456")
            {
                if (database == "Publishers")
                {
                    res = "PUBLISHERS SETUP";
                    await PublishersFunction(offset);
                }
                if (database == "Movies")
                {
                    res = "MOVIES SETUP";
                    await MoviesFunction(offset);
                }
            }
            return res;
        }

        private async Task PublishersFunction(int offset)
        {
            var nombers = await GetPubishersAsync(1, 0);
            var total = nombers.Number_of_total_results;
            var flag = true;
            int i = offset;
            for (; i < total && flag; i += 50)
            {
                var res = await GetPubishersAsync(50, i);
                if (res.Results != null)
                {
                    foreach (var item in res.Results)
                    {
                        var createPublishers = new CreatePublishers
                        {
                            Image = item.Image.Small_url,
                            Name = item.Name,
                            Deck = item.Deck
                        };
                        publishersRepository.Add(createPublishers);
                    }
                }
                Thread.Sleep(300);
            }

        }

        private async Task MoviesFunction(int offset)
        {
            var nombers = await GetMoviesAsync(1, 0);
            var total = nombers.Number_of_total_results;
            var flag = true;
            int i = offset;
            for (; i < total && flag; i += 50)
            {
                if (i == 850)
                    i += 50;
                if (i == 1050)
                    i = 1550;
                if (i == 1600)
                    i = 1700;
                if (i == 1750)
                    i = 1950;
                var res = await GetMoviesAsync(50, i);
                foreach (var item in res.Results)
                {
                    var createMovies = new CreateMovies
                    {
                        Deck = item.Deck,
                        Image = item.Image.Medium_url,
                        Name = item.Name,
                        Release_date = item.Release_date
                    };


                    int movie_id = moviesRepository.Add(createMovies);
                    if (item.Studios != null)
                        foreach (var publisher in item.Studios)
                        {
                            var publishers = publishersRepository.GetByName(publisher.Name);
                            if (publishers != null)
                                movie_PublisherRepository.Add(new CreateMovie_Publisher { Movie_id = movie_id, Publisher_id = publishers.Id });
                        }
                }
                Thread.Sleep(300);
            }

        }

        private async Task<MovieHandler> GetMoviesAsync(int limit, int offset)
        {
            MovieHandler movies = null;
            HttpResponseMessage response = await _client.GetAsync("/api/movies?format=json&api_key=f9ed702afacfc24652dfe6f93b7e6eae5c8402d1&limit=" + limit + "&offset=" + offset);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                Console.WriteLine(content);
                movies = JsonConvert.DeserializeObject<MovieHandler>(content);
                Console.WriteLine(movies.ToString());
            }
            return movies;
        }

        private async Task<PublisherHandler> GetPubishersAsync(int limit, int offset)
        {
            PublisherHandler publishers = null;
            HttpResponseMessage response = await _client.GetAsync("/api/publishers?format=json&api_key=f9ed702afacfc24652dfe6f93b7e6eae5c8402d1&limit=" + limit + "&offset=" + offset);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                Console.WriteLine(content);
                publishers = JsonConvert.DeserializeObject<PublisherHandler>(content);
                Console.WriteLine(publishers.Results.ToString());
            }
            return publishers;
        }
    }
}
