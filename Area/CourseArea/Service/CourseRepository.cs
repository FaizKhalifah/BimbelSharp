using Bimbelsharp.Data;
using Bimbelsharp.Data.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bimbelsharp.Area.CourseArea.Service
{
    public class CourseRepository:ICourseRepository
    {
        public CourseRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        private readonly ApplicationDbContext _context;

        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            return await _context.Courses.ToListAsync();
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await _context.Courses.FindAsync(id);
        }

        public async Task<Course> AddCourseAsync(Course course)
        {
            await _context.Courses.AddAsync(course);
            await _context.SaveChangesAsync();
            return course;
        }

        public async Task<bool> UpdateCourseAsync(Course course)
        {
            _context.Courses.Update(course);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> DeleteCourseAsync(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null) return false;

            _context.Courses.Remove(course);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
