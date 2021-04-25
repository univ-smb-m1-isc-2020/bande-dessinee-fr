using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MoviesRepository movieRepository;
        private readonly IConfiguration _config;
        public MovieController(IConfiguration config)
        {
            _config = config;
            movieRepository = new MoviesRepository(_config);
        }

        // GET: api/<MovieController>
        [HttpGet]
        public Pagination Get([FromQuery] int page)
        {
            var res = new Pagination
            {
                Pages = movieRepository.GetPages(),
                Movies = movieRepository.GetPage(page)
            };
            return res;
        }

        // GET api/<MovieController>/5
        [HttpGet("{id}")]
        public Movies GetById(int id)
        {
            return movieRepository.Get(id);
        }

        // POST api/<MovieController>
        [HttpPost]
        public void Post([FromBody] CreateMovies createMovies)
        {
            movieRepository.Add(createMovies);
        }

        // PUT api/<MovieController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] CreateMovies createMovies)
        {
            movieRepository.Update(id, createMovies);
        }

        // DELETE api/<MovieController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            movieRepository.Delete(id);
        }
    }
}
