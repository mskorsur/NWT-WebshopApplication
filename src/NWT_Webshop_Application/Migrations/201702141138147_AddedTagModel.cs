namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedTagModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Tags",
                c => new
                    {
                        TagID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.TagID);
            
            CreateTable(
                "dbo.TagProducts",
                c => new
                    {
                        Tag_TagID = c.Int(nullable: false),
                        Product_ProductID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Tag_TagID, t.Product_ProductID })
                .ForeignKey("dbo.Tags", t => t.Tag_TagID, cascadeDelete: true)
                .ForeignKey("dbo.Products", t => t.Product_ProductID, cascadeDelete: true)
                .Index(t => t.Tag_TagID)
                .Index(t => t.Product_ProductID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TagProducts", "Product_ProductID", "dbo.Products");
            DropForeignKey("dbo.TagProducts", "Tag_TagID", "dbo.Tags");
            DropIndex("dbo.TagProducts", new[] { "Product_ProductID" });
            DropIndex("dbo.TagProducts", new[] { "Tag_TagID" });
            DropTable("dbo.TagProducts");
            DropTable("dbo.Tags");
        }
    }
}
