using Bimbelsharp.Data.Model.Junction;

namespace Bimbelsharp.Data.Model.Entities
{
    public class Teacher:BaseModel
    {
        public string Name { get; set; }
        public string Speciality { get; set; }
        public string Education { get; set; }
        public string Email { get; set; }

        public List<TeacherCourse> TeacherCourses = new List<TeacherCourse>();
    }
}
