namespace NWT_Webshop_Application.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ShoppingCartProductModelAdded : DbMigration
    {
        public override void Up()
        {
            //DropForeignKey("dbo.ShoppingCartProducts", "ShoppingCart_ShoppingCartID", "dbo.ShoppingCarts");
            //DropForeignKey("dbo.ShoppingCartProducts", "Product_ProductID", "dbo.Products");
            //DropIndex("dbo.ShoppingCartProducts", new[] { "ShoppingCart_ShoppingCartID" });
            //DropIndex("dbo.ShoppingCartProducts", new[] { "Product_ProductID" });
            CreateTable(
                "dbo.ShoppingCartProducts",
                c => new
                    {
                        ShoppingCartID = c.String(nullable: false, maxLength: 128),
                        ProductID = c.Int(nullable: false),
                        Amount = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.ShoppingCartID, t.ProductID })
                .ForeignKey("dbo.Products", t => t.ProductID, cascadeDelete: true)
                .ForeignKey("dbo.ShoppingCarts", t => t.ShoppingCartID, cascadeDelete: true)
                .Index(t => t.ShoppingCartID)
                .Index(t => t.ProductID);
            
            //DropTable("dbo.ShoppingCartProducts");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.ShoppingCartProducts",
                c => new
                    {
                        ShoppingCart_ShoppingCartID = c.String(nullable: false, maxLength: 128),
                        Product_ProductID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.ShoppingCart_ShoppingCartID, t.Product_ProductID });
            
            DropForeignKey("dbo.ShoppingCartProducts", "ShoppingCartID", "dbo.ShoppingCarts");
            DropForeignKey("dbo.ShoppingCartProducts", "ProductID", "dbo.Products");
            DropIndex("dbo.ShoppingCartProducts", new[] { "ProductID" });
            DropIndex("dbo.ShoppingCartProducts", new[] { "ShoppingCartID" });
            DropTable("dbo.ShoppingCartProducts");
            CreateIndex("dbo.ShoppingCartProducts", "Product_ProductID");
            CreateIndex("dbo.ShoppingCartProducts", "ShoppingCart_ShoppingCartID");
            AddForeignKey("dbo.ShoppingCartProducts", "Product_ProductID", "dbo.Products", "ProductID", cascadeDelete: true);
            AddForeignKey("dbo.ShoppingCartProducts", "ShoppingCart_ShoppingCartID", "dbo.ShoppingCarts", "ShoppingCartID", cascadeDelete: true);
        }
    }
}
