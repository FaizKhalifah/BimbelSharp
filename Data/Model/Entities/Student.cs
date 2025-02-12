using Bimbelsharp.Data.Model.Junction;

namespace Bimbelsharp.Data.Model.Entities
{
    public class Student:User
    {
        
        public int Batch { get; set; }
        public List<StudentCourse> StudentCourses { get; set; } = new List<StudentCourse>();

        public Student()
        {
            Role = Role.Student;
        }
    }
}
