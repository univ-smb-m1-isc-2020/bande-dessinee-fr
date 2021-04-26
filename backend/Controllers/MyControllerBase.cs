using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;

namespace backend.Controllers
{
    public class MyControllerBase : ControllerBase
    {
        public int GetUserID(IConfiguration config, string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(config["Jwt:Key"]))
            }, out SecurityToken validatedToken);

            if (!(validatedToken is JwtSecurityToken jwtToken) || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                throw new SecurityTokenException("Invalid token");
            }
            var claimIdentity = principal.Claims.FirstOrDefault();
            return int.Parse(claimIdentity.Value);
        }
    }
}