using Bimbelsharp.Data.Model.Junction;

namespace Bimbelsharp.Data.Model.Entities
{
    public class Teacher:User
    {
       
        public string Speciality { get; set; }
        public string Education { get; set; }
       

        public List<TeacherCourse> TeacherCourses = new List<TeacherCourse>();

        public Teacher()
        {
            Role = Role.Teacher;
        }
    }
}
