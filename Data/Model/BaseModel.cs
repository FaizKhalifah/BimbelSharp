﻿namespace Bimbelsharp.Data.Model
{
    public abstract class BaseModel
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedDate { get; set; } = DateTime.UtcNow;

        public BaseModel()
        {
            
        }
    }
}
