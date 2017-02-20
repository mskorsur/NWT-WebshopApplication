namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductModelUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Scores", c => c.String(maxLength: 500));
            DropColumn("dbo.Products", "NumberOfScores");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "NumberOfScores", c => c.Int(nullable: false));
            DropColumn("dbo.Products", "Scores");
        }
    }
}
