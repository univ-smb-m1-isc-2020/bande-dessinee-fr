using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class UtilisateurController : ControllerBase
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
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            var user_id = int.Parse(claimIdentity.Value);
            return utilisateurRepository.GetById(user_id);
        }


        // PUT api/<UtilisateurController>/5
        [HttpPut]
        public void Put([FromHeader(Name = "Authorization")] string token, [FromBody] Utilisateur user)
        {
            var jwtEncodedString = token[7..];
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            var user_id = int.Parse(claimIdentity.Value);
            user.Id = user_id;
            utilisateurRepository.Update(user);
        }

        [HttpDelete]
        public void Delete([FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            var user_id = int.Parse(claimIdentity.Value);
            utilisateurRepository.Delete(user_id);
        }
        //Notifications //////////////////////////
        [HttpGet("notifications")]
        public IEnumerable<Notifications> GetNotifications([FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            var user_id = int.Parse(claimIdentity.Value);
            return notificationRepository.GetUsersNotification(user_id);
        }
        [HttpDelete("notifications/{id}")]
        public void DeleteNotifications(int id, [FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            var user_id = int.Parse(claimIdentity.Value);
            notificationRepository.Delete(id);
        }

        [HttpGet("like")]
        public IEnumerable<Utilisateur_Publisher> GetLike()
        {
            
            var res = Request.Headers.TryGetValue("Authorization",out Microsoft.Extensions.Primitives.StringValues token2);
            if (res)
            {
                var token = token2.ToString();
                var jwtEncodedString = token[7..];
                var tokenHandler = new JwtSecurityTokenHandler();
                var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateIssuerSigningKey = true,
                    ValidateLifetime = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
                }, out SecurityToken validatedToken);

                if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
                {
                    throw new SecurityTokenException("Invalid token");
                }
                var claimIdentity = principal.Claims.FirstOrDefault();
                var user_id = int.Parse(claimIdentity.Value);
                return utilisateur_PublisherRepository.GetByUser(user_id);
            }
            return null;
            
        }
        /// <summary>
        /// Post a like
        /// </summary>
        /// <param name="createUtilisateur_Publisher"></param>
        /// <param name="token"></param>
        /// <returns>id of like</returns>
        [HttpPost("like")]
        public int AddLike([FromBody] CreateUtilisateur_Publisher createUtilisateur_Publisher, [FromHeader(Name = "Authorization")] string token)
        {
            var jwtEncodedString = token[7..];
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(jwtEncodedString, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            var user_id = int.Parse(claimIdentity.Value);
            createUtilisateur_Publisher.Utilisateur_id = user_id;
            return utilisateur_PublisherRepository.Add(createUtilisateur_Publisher);
        }
        /// <summary>
        /// Delete a like by id
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("like/{id}")]
        public void DeleteLike(int id)
        {
            utilisateur_PublisherRepository.Delete(id);
        }

    }
}
