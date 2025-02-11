using Bimbelsharp.Data.Model.Entities;

namespace Bimbelsharp.Data.Model.Junction
{
    public class TeacherCourse
    {
        public Guid TeacherId { get; set; }
        public Teacher Teacher { get; set; }

        public Guid courseId { get; set; }
        public Course TeacherCourses { get; set; }
    }
}
