using Bimbelsharp.Data.Model.Entities;

namespace Bimbelsharp.Data.Model.Junction
{
    public class StudentCourse
    {
        public Guid StudentId { get; set; }
        public Student Student { get; set; }

        public Guid CourseId { get; set; }
        public Course StudentCourses { get; set; }
    }
}
