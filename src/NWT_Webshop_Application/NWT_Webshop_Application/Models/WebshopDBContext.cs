using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace NWT_Webshop_Application.Models
{
    public class WebshopDBContext : IdentityDbContext<ApplicationUser>
    {
        public WebshopDBContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<ShoppingCart> ShoppingCarts { get; set; }


        public static WebshopDBContext Create()
        {
            return new WebshopDBContext();
        }
    }
}