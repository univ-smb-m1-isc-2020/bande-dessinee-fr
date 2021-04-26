using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublisherController : ControllerBase
    {
        private readonly PublishersRepository publishersRepository;
        private readonly IConfiguration _config;
        public PublisherController(IConfiguration config)
        {
            _config = config;
            publishersRepository = new PublishersRepository(_config);
        }

        [HttpGet]
        public PaginationPublisher Get([FromQuery] int page)
        {
            var res = new PaginationPublisher
            {
                Pages = publishersRepository.GetPages(),
                Movies = publishersRepository.GetPage(page)
            };
            return res;
        }


        [HttpGet("{id}")]
        public Publishers GetById(int id)
        {
            return publishersRepository.Get(id);
        }

        // POST api/<MovieController>
        [HttpPost]
        public void Post([FromBody] CreatePublishers createPublishers)
        {
            publishersRepository.Add(createPublishers);
        }

        // PUT api/<MovieController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] CreatePublishers createPublishers)
        {
            publishersRepository.Update(id, createPublishers);
        }

        // DELETE api/<MovieController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            publishersRepository.Delete(id);
        }
    }
}
