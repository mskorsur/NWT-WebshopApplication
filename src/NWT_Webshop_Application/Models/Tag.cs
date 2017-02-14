using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NWT_Webshop_Application.Models
{
    public class Tag
    {
        [Key]
        public int TagID { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Name { get; set; }


        public virtual ICollection<Product> Products { get; set; }

    }
}