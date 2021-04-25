
using backend.Models;

namespace backend.Authentication
{
    public interface IJwtAuthenticationManager
    {
        public AuthenticationResponse Authenticate(AuthenticateUtilisateur authenticateUtilisateur);
        public AuthenticationResponse AuthenticateRefresh(int id);

    }
}
