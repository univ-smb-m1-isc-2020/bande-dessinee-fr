using backend.Helpers;
using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Text;

namespace backend.Authentication
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly UtilisateurRepository utilisateurRepository;
        private readonly IJwtAuthenticationManager jwtAuthentication;
        private readonly ITokenRefresher tokenRefresher;

        public AuthController(IConfiguration config, IJwtAuthenticationManager jwtAuthentication, ITokenRefresher tokenRefresher)
        {
            _config = config;
            this.jwtAuthentication = jwtAuthentication;
            this.tokenRefresher = tokenRefresher;
            utilisateurRepository = new UtilisateurRepository(_config);
        }
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public ActionResult<AuthenticationResponse> Authenticate([FromBody] AuthenticateUtilisateur authenticateUtilisateur)
        {
            AuthenticationResponse authentication = null;
            if (ModelState.IsValid)
            {
                Utilisateur utilisateurFromBdd = utilisateurRepository.GetByEmail(authenticateUtilisateur.Email);
                if (utilisateurFromBdd != null)
                {
                    if (PasswordHashAndVerify.VerifyHash(authenticateUtilisateur.MotDePasse, "SHA512", utilisateurFromBdd.MotDePasse))
                    {
                        authenticateUtilisateur.MotDePasse = utilisateurFromBdd.MotDePasse;
                        authentication = jwtAuthentication.Authenticate(authenticateUtilisateur);
                    }
                    else return Ok(new { Toast = "Mot de passe erroné" });
                }
                else return Ok(new { Toast = "Email erroné" });

            }
            return Ok(new AuthenticationResponse { Token = authentication.Token, RefreshToken = authentication.RefreshToken }) ;
        }
        [HttpPost]
        [AllowAnonymous]
        [Route("register")]
        public ActionResult<AuthenticationResponse> Register([FromBody] CreateUtilisateur createUtilisateur)
        {
            CreateUtilisateur utilisateur = new CreateUtilisateur
            {
                Nom = createUtilisateur.Nom,
                Prenom = createUtilisateur.Prenom,
                Email = createUtilisateur.Email,
                MotDePasse = createUtilisateur.MotDePasse,
            };

            AuthenticationResponse token = null;
            if (ModelState.IsValid && utilisateurRepository.GetByEmail(utilisateur.Email) == null)
            {
                string pass = PasswordHashAndVerify.ComputeHash(utilisateur.MotDePasse, "SHA512", Encoding.UTF8.GetBytes(_config["Salt:Default"]));
                utilisateur.MotDePasse = pass;
                utilisateurRepository.Add(utilisateur);
                token = jwtAuthentication.Authenticate(new AuthenticateUtilisateur { Email = utilisateur.Email, MotDePasse = utilisateur.MotDePasse });
            }
            if (token == null)
                return BadRequest(new { Toast = "Email déja utilisé" });
            return Ok(new AuthenticationResponse { Token = token.Token, RefreshToken = token.RefreshToken });
        }
        [HttpPost]
        [AllowAnonymous]
        [Route("refresh")]
        public IActionResult Refresh([FromBody] RefreshUtilisateur refreshUtilisateur)
        {
            AuthenticationResponse refreshToken = null;

            if (ModelState.IsValid)
            {
                refreshToken = tokenRefresher.Refresh(refreshUtilisateur);
            }

            if (refreshToken == null)
                return Unauthorized();

            return Ok(new AuthenticationResponse { Token = refreshToken.Token, RefreshToken = refreshToken.RefreshToken });
        }
    }

}
