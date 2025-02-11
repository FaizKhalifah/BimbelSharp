using Bimbelsharp.Data.Model.Junction;

namespace Bimbelsharp.Data.Model.Entities
{
    public class Student:BaseModel
    {
        public string Name { get; set; }
        public int Batch { get; set; }
        public List<StudentCourse> StudentCourses { get; set; } = new List<StudentCourse>();
    }
}
