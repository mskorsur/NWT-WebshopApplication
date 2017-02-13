namespace NWT_Webshop_Application.Migrations
{
    using Models;
    using System;
    using System.Collections.Generic;
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
                new Product { ProductID = 1, Name = "Leather Jacket", Description = "Fine black leather jacket for men.",
                    Price = 109.99f, ImageURL = "http://lp2.hm.com/hmprod?set=source[/model/2016/E00%200363603%20002%2018%202089.jpg],width[1508],height[1763],x[1178],y[108],type[DETAIL]&hmver=1&call=url[file:/product/main]",
                    NumberOfScores = 0, AverageScore = 1, Tags = new List<string>(){ "men", "leather", "jacket", "black" }
                });

            context.Products.AddOrUpdate(
               new Product
               {
                   ProductID = 2,
                   Name = "Bomber Jacket",
                   Description = "Lightly padded, slightly longer bomber jacket in a generous fit. Zip down the front, flap front pockets, a zipped pocket on one sleeve and ribbing around the neckline, cuffs and hem.",
                   Price = 39.99f,
                   ImageURL = "http://lp2.hm.com/hmprod?set=source[/model/2016/D00%200427951%20001%2082%205394.jpg],type[STILLLIFE_BACK]&hmver=3&call=url[file:/product/main]",
                   NumberOfScores = 0,
                   AverageScore = 1,
                   Tags = new List<string>(){ "women", "jacket", "black", "padded", "zip" }
               });

            context.Products.AddOrUpdate(
               new Product
               {
                   ProductID = 3,
                   Name = "T-shirt with a chest pocket",
                   Description = "T-shirt in cotton jersey with a chest pocket, seam centre back and raw edges.",
                   Price = 39.99f,
                   ImageURL = "http://lp2.hm.com/hmprod?set=source[/model/2016/E00%200448259%20002%2022%201257.jpg],type[STILLLIFE_FRONT]&hmver=1&call=url[file:/product/main]",
                   NumberOfScores = 0,
                   AverageScore = 1,
                   Tags =  new List<string>(){ "men", "t-shirt", "cotton", "pocket" }
               });

        }
    }
}
