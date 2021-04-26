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
        private readonly PublishersRepository publishersRepository;
        private readonly Utilisateur_PublisherRepository utilisateur_PublisherRepository;
        private readonly NotificationRepository notificationRepository;

        public MovieController(IConfiguration config)
        {
            _config = config;
            movieRepository = new MoviesRepository(_config);
            publishersRepository = new PublishersRepository(_config);
            utilisateur_PublisherRepository = new Utilisateur_PublisherRepository(_config);
            notificationRepository = new NotificationRepository(_config);
        }

        // GET: api/<MovieController>
        [HttpGet]
        public PaginationMovie Get([FromQuery] int page)
        {
            var res = new PaginationMovie
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
        public void Post([FromBody] CreateMoviesAndPublisher createMoviesAndPublisher)
        {
            int movie_id = movieRepository.Add(new CreateMovies
            {
                Deck = createMoviesAndPublisher.Deck,
                Description = createMoviesAndPublisher.Description,
                Image = createMoviesAndPublisher.Image,
                Name = createMoviesAndPublisher.Name,
                Release_date = createMoviesAndPublisher.Release_date,
            });
            var publishers = publishersRepository.GetByName(createMoviesAndPublisher.Publisher);
            if (publishers != null) NotifyUtilisateur(publishers, movie_id);
        }

        private void NotifyUtilisateur(Publishers publishers, int movie_id)
        {
            var utilisateur_Publishers = utilisateur_PublisherRepository.GetByPublisher(publishers.Id);
            foreach (var notif in utilisateur_Publishers)
            {
                notificationRepository.Add(new CreateDeleteNotifications { Movie_id = movie_id, Utilisateur_id = notif.Utilisateur_id });
            }
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
