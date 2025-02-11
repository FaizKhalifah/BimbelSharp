using Bimbelsharp.Data.Model.Junction;

namespace Bimbelsharp.Data.Model.Entities
{
    public class Course:BaseModel
    {
        public string CourseName { get; set; }
        public string Type { get; set; }

        public List<TeacherCourse> TeacherCourses = new List<TeacherCourse>();
        public List <StudentCourse> StudentCourses = new List<StudentCourse>();
    }
}
