using backend.Models;

namespace backend.Authentication
{
    public interface ITokenRefresher
    {
        public AuthenticationResponse Refresh(RefreshUtilisateur refreshUtilisateur);
    }
}