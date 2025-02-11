using Bimbelsharp.Data.Model.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bimbelsharp.Area.CourseArea.Service
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetAllCoursesAsync();
        Task<Course> GetCourseByIdAsync(int id);
        Task<Course> AddCourseAsync(Course course);
        Task<bool> UpdateCourseAsync(Course course);
        Task<bool> DeleteCourseAsync(int id);
    }
}
