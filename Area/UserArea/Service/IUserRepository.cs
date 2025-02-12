using Bimbelsharp.Data.Model;

namespace Bimbelsharp.Area.UserArea.Service
{
    public interface IUserRepository
    {
        Task<User?> GetUserByEmailAsync(string email);
        Task AddUserAsync(User user);
    }
}
