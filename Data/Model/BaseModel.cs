using System.ComponentModel.DataAnnotations;

namespace Bimbelsharp.Data.Model
{
    public abstract class BaseModel
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedDate { get; set; } = DateTime.UtcNow;

        public BaseModel()
        {
            
        }
    }
}
