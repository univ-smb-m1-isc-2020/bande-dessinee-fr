using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UtilisateurController : MyControllerBase
    {
        private readonly UtilisateurRepository utilisateurRepository;
        private readonly Utilisateur_PublisherRepository utilisateur_PublisherRepository;
        private readonly IConfiguration _config;
        private readonly NotificationRepository notificationRepository;

        public UtilisateurController(IConfiguration config)
        {
            _config = config;
            utilisateurRepository = new UtilisateurRepository(_config);
            utilisateur_PublisherRepository = new Utilisateur_PublisherRepository(config);
            notificationRepository = new NotificationRepository(_config);
        }

        // GET api/<UtilisateurController>/5
        [HttpGet]
        public Utilisateur Get([FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var user_id = GetUserID(_config, jwtEncodedString);
            return utilisateurRepository.GetById(user_id);
        }

        [HttpGet]
        [Route("notifications")]
        public IEnumerable<Notifications> GetNotifications([FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var user_id = GetUserID(_config, jwtEncodedString);
            return notificationRepository.GetUsersNotification(user_id);
        }
        [HttpDelete]
        [Route("notifications")]
        public void DeleteNotifications(int id, [FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var user_id = GetUserID(_config, jwtEncodedString);
            notificationRepository.Delete(id);
        }
        [HttpPost]
        [Route("like")]
        public int AddLike([FromBody] CreateUtilisateur_Publisher createUtilisateur_Publisher, [FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var user_id = GetUserID(_config, jwtEncodedString);
            createUtilisateur_Publisher.Utilisateur_id = user_id;
            return utilisateur_PublisherRepository.Add(createUtilisateur_Publisher);
        }

        [HttpDelete]
        [Route("like")]
        public void DeleteLike(int id)
        {
            utilisateur_PublisherRepository.Delete(id);
        }

        // PUT api/<UtilisateurController>/5
        [HttpPut]
        public void Put([FromHeader(Name = "Authorization")] string token, [FromBody] Utilisateur user)
        {
            var jwtEncodedString = token[7..];
            var user_id = GetUserID(_config, jwtEncodedString);
            user.Id = user_id;
            utilisateurRepository.Update(user);
        }

        // DELETE api/<UtilisateurController>/5
        [HttpDelete]
        public void Delete([FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var user_id = GetUserID(_config, jwtEncodedString);
            utilisateurRepository.Delete(user_id);
        }
    }
}
