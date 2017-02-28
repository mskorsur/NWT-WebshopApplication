using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT_Webshop_Application.Models
{
    public class ShoppingCartViewModel
    {
        public string UserID { get; set; }

        public int ProductID { get; set; }

        public int Amount { get; set; }
    }
}