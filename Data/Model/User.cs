namespace Bimbelsharp.Data.Model
{
    public class UserBase:BaseModel
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string HashedPassword { get; set; }
        public Role Role { get; set; }
    }

    public enum Role
    {
        Admin,
        Teacher,
        Student
    }
}
