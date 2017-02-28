using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NWT_Webshop_Application.Models
{
    public class ShoppingCartProduct
    {
        [Key, Column(Order = 0)]
        public string ShoppingCartID { get; set; }

        [Key, Column(Order = 1)]
        public int ProductID { get; set; }

        public virtual Product Product { get; set; }

        public int Amount { get; set; }

    }
}