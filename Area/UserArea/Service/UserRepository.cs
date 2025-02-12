using Bimbelsharp.Data;
using Bimbelsharp.Data.Model;
using Bimbelsharp.Data.Model.Entities;
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

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.Set<User>().FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<Teacher?> GetTeacherByEmailAsync(string email)
        {
            return await _context.Set<Teacher>().FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<Admin?> GetAdminByEmailAsync(string email)
        {
            return await _context.Set<Admin>().FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<Student?> GetStudentByEmailAsync(string email)
        {
            return await _context.Set<Student>().FirstOrDefaultAsync(u => u.Email == email);
        }



        public async Task AddUserAsync(User user)
        {
            switch (user.Role)
            {
                case Role.Admin:
                    await _context.Admins.AddAsync((Admin)user);
                    break;
                case Role.Teacher:
                    await _context.Teachers.AddAsync((Teacher)user);
                    break;
                case Role.Student:
                    await _context.Students.AddAsync((Student)user);
                    break;
                default:
                    throw new ArgumentException("Invalid user role");
            }

            await _context.SaveChangesAsync();
        }

    }
}
