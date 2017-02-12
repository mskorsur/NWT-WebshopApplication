namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserModelUpdate2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.AspNetUsers", "Password");
            DropColumn("dbo.AspNetUsers", "ConfirmPassword");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "ConfirmPassword", c => c.String());
            AddColumn("dbo.AspNetUsers", "Password", c => c.String(nullable: false, maxLength: 100));
        }
    }
}
