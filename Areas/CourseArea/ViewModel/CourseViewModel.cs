using System;
using System.Collections.Generic;

namespace Bimbelsharp.Area.CourseArea.ViewModel
{
    public class CourseViewModel
    {
        public Guid Id { get; set; }
        public string CourseName { get; set; }
        public string Type { get; set; }

        // List nama pengajar yang mengajar di course ini
        public List<string> TeacherNames { get; set; } = new List<string>();

        // List nama siswa yang mengambil course ini
        public List<string> StudentNames { get; set; } = new List<string>();

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedDate { get; set; } = DateTime.UtcNow;
    }
}
