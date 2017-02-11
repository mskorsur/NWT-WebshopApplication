namespace NWT_Webshop_Application.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NWT_Webshop_Application.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(NWT_Webshop_Application.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Products.AddOrUpdate(
                new Product { Name = "Leather Jacket", Description = "Fine black leather jacket for men.",
                    Price = 109.99f, ImageURL = "http://lp2.hm.com/hmprod?set=source[/model/2016/E00%200363603%20002%2018%202089.jpg],width[1508],height[1763],x[1178],y[108],type[DETAIL]&hmver=1&call=url[file:/product/main]",
                    NumberOfScores = 0, Tags = new string[] { "men", "leather", "jacket", "black" }
                });
        }
    }
}
