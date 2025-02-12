using Bimbelsharp.Data;
using Bimbelsharp.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace Bimbelsharp.Area.UserArea.Service
{
    public class UserRepository:IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;   
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _context.Set<User>().FirstOrDefaultAsync(u=>u.Email==email);
        }

        public async Task AddUserAsync(User user)
        {
            await _context.Set<User>().AddAsync(user);
            await _context.SaveChangesAsync();
        }
    }
}
