using Bimbelsharp.Data.Model;
using Bimbelsharp.Data.Model.Entities;

namespace Bimbelsharp.Area.UserArea.Service
{
    public interface IUserRepository
    {
        Task<User?> GetUserByEmailAsync(string email);

        Task<Teacher?> GetTeacherByEmailAsync(string email);

        Task<Student?> GetStudentByEmailAsync(string email);

        Task<Admin?> GetAdminByEmailAsync(string email);
        Task AddUserAsync(User user);
    }
}
