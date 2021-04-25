using backend.Models;
using backend.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Authentication
{
    public class JwtAuthenticationManager : IJwtAuthenticationManager
    {
        private readonly UtilisateurRepository utilisateurRepository;
        private readonly IConfiguration _config;
        public JwtAuthenticationManager(IConfiguration config)
        {
            _config = config;
            utilisateurRepository = new UtilisateurRepository(_config);
        }
        public AuthenticationResponse Authenticate(AuthenticateUtilisateur authenticateUtilisateur)
        {
            var utilisateurFromBdd = utilisateurRepository.Authenticate(authenticateUtilisateur);
            if (utilisateurFromBdd != null)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);
                var tokenDecriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Sid,utilisateurFromBdd.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256)
                };
                var refreshTokenDecriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Sid,utilisateurFromBdd.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMonths(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256)
                };
                var token = tokenHandler.CreateToken(tokenDecriptor);
                var refreshToken = tokenHandler.CreateToken(refreshTokenDecriptor);
                return new AuthenticationResponse { Token = tokenHandler.WriteToken(token), RefreshToken = tokenHandler.WriteToken(refreshToken) };
            }
            return null;
        }

        public AuthenticationResponse AuthenticateRefresh(int id)
        {
            var utilisateurFromBdd = utilisateurRepository.GetById(id);
            if (utilisateurFromBdd != null)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);
                var tokenDecriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Sid, utilisateurFromBdd.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256)
                };
                var refreshTokenDecriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Sid, utilisateurFromBdd.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMonths(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256)
                };
                var token = tokenHandler.CreateToken(tokenDecriptor);
                var refreshToken = tokenHandler.CreateToken(refreshTokenDecriptor);
                return new AuthenticationResponse { Token = tokenHandler.WriteToken(token), RefreshToken = tokenHandler.WriteToken(refreshToken) };
            }
            return null;

        }
    }
}
