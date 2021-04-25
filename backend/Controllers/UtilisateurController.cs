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
    public class UtilisateurController : ControllerBase
    {
        private readonly UtilisateurRepository utilisateurRepository;
        private readonly IConfiguration _config;

        public UtilisateurController(IConfiguration config)
        {
            _config = config;
            utilisateurRepository = new UtilisateurRepository(_config);
        }
        // GET: api/<UtilisateurController>
        [HttpGet]
        public IEnumerable<Utilisateur> Get()
        {
            return utilisateurRepository.GetAll();
        }

        // GET api/<UtilisateurController>/5
        [HttpGet("{id}")]
        public Utilisateur Get(int id)
        {
            return utilisateurRepository.GetById(id);
        }

        // POST api/<UtilisateurController>
        [HttpPost]
        public ActionResult<Utilisateur> Post([FromBody] CreateUtilisateur user)
        {
            ActionResult res = BadRequest();
            var itexists = utilisateurRepository.GetByEmail(user.Email);

            if (itexists == null)
            {
                utilisateurRepository.Add(user);
                res = Ok(user);
            }
            return res;
        }

        // PUT api/<UtilisateurController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Utilisateur user)
        {
            user.Id = id;
            utilisateurRepository.Update(user);
        }

        // DELETE api/<UtilisateurController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            utilisateurRepository.Delete(id);
        }
    }
}
