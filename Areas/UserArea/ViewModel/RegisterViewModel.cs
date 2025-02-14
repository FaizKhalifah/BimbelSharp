using System.ComponentModel.DataAnnotations;

namespace Bimbelsharp.Areas.UserArea.ViewModel
{
    public class RegisterViewModel
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
