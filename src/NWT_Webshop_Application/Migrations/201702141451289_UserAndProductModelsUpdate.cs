namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserAndProductModelsUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Tags", c => c.String(nullable: false, maxLength: 200));
            AddColumn("dbo.Products", "ApplicationUser_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Products", "ApplicationUser_Id");
            AddForeignKey("dbo.Products", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Products", new[] { "ApplicationUser_Id" });
            DropColumn("dbo.Products", "ApplicationUser_Id");
            DropColumn("dbo.Products", "Tags");
        }
    }
}
