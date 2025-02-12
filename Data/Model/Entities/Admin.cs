namespace Bimbelsharp.Data.Model.Entities
{
    public class Admin:User
    {

        public Admin()
        {
            Role = Role.Admin;
        }
    }
}
