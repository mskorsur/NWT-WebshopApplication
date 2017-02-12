namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserModelUpdated : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AspNetUsers", "FirstName", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.AspNetUsers", "LastName", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.AspNetUsers", "Address", c => c.String(nullable: false, maxLength: 100));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AspNetUsers", "Address", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.AspNetUsers", "LastName", c => c.String(nullable: false, maxLength: 25));
            AlterColumn("dbo.AspNetUsers", "FirstName", c => c.String(nullable: false, maxLength: 20));
        }
    }
}
