using backend.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;

namespace backend.Authentication
{
    class TokenRefresher : ITokenRefresher
    {
        private readonly IConfiguration configuration;
        private readonly JwtAuthenticationManager jwtAuthentication;

        public TokenRefresher(IConfiguration configuration)
        {
            this.configuration = configuration;
            jwtAuthentication = new JwtAuthenticationManager(this.configuration);
        }

        public AuthenticationResponse Refresh(RefreshUtilisateur refreshUtilisateur)
        {

            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(refreshUtilisateur.RefreshToken, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(this.configuration["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                return null;
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            //type value                            valueType
            //"id",utilisateurFromBdd.Id.ToString(),ClaimValueTypes.Integer

            return this.jwtAuthentication.AuthenticateRefresh(int.Parse(claimIdentity.Value));
        }
    }
}