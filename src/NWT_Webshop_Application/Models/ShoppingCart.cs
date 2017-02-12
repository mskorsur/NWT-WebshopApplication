using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NWT_Webshop_Application.Models
{
    public class ShoppingCart
    {
        [Key]
        [ForeignKey("User")]
        public string ShoppingCartID { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<Product> Products { get; set; }

    }
}