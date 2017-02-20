namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserModelUpdate : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Products", new[] { "ApplicationUser_Id" });
            AddColumn("dbo.AspNetUsers", "RatedProductsIDs", c => c.String(maxLength: 500));
            DropColumn("dbo.Products", "ApplicationUser_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "ApplicationUser_Id", c => c.String(maxLength: 128));
            DropColumn("dbo.AspNetUsers", "RatedProductsIDs");
            CreateIndex("dbo.Products", "ApplicationUser_Id");
            AddForeignKey("dbo.Products", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
