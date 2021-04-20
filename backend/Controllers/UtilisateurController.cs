using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public Task<IEnumerable<Utilisateur>> Get()
        {
            return utilisateurRepository.GetAll();
        }

        // GET api/<UtilisateurController>/5
        [HttpGet("{id}")]
        public Task<Utilisateur> Get(int id)
        {
            return utilisateurRepository.GetById(id);
        }

        // POST api/<UtilisateurController>
        [HttpPost]
        public async Task<ActionResult<Utilisateur>> Post([FromBody] CreateUtilisateur user)
        {

            var itexists = await utilisateurRepository.GetByEmail(user.Email);
            if (itexists == null)
            {
                var t = await utilisateurRepository.Add(user);
                var userfrombdd = utilisateurRepository.GetById(t);
                return CreatedAtAction(nameof(Utilisateur), new { id = itexists.User_id }, userfrombdd);
            }
            return CreatedAtAction(nameof(Utilisateur), new { id = itexists.User_id }, null);
        }


        // PUT api/<UtilisateurController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Utilisateur user)
        {
            user.User_id = id;
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
