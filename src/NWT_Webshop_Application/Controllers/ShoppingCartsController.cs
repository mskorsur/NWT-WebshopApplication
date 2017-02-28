using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using NWT_Webshop_Application.Models;

namespace NWT_Webshop_Application.Controllers
{
    [Authorize]
    public class ShoppingCartsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        
        [Route("api/GetAllCartProducts")]
        [ResponseType(typeof(ShoppingCartProduct))]
        [HttpGet]
        public ICollection<ShoppingCartProduct> GetProductsAndAmounts(string id)
        {
            var currentUserProducts = db.CartsProducts
                                        .Where(cp => cp.ShoppingCartID == id)
                                        .ToList();

            return currentUserProducts;
        }

        [Route("api/SaveProductInCart")]
        [HttpGet]
        public IHttpActionResult SaveProduct(string userId, int productId)
        {
            var currentUserCart = db.ShoppingCarts.FirstOrDefault(c => c.User.Id == userId);
            var newCartItem = new ShoppingCartProduct()
            {
                ShoppingCartID = currentUserCart.ShoppingCartID,
                ProductID = productId,
                Product = db.Products.FirstOrDefault(p => p.ProductID == productId),
                Amount = 1
            };

            currentUserCart.ShoppingCartProducts.Add(newCartItem);

            db.Entry(currentUserCart).State = EntityState.Modified;
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("api/UpdateCartProduct")]
        [HttpPut]
        public IHttpActionResult UpdateProductAmount(ShoppingCartViewModel update)
        {
            var userProducts = GetProductsAndAmounts(update.UserID);
            var currentProduct = userProducts.FirstOrDefault(p => p.ProductID == update.ProductID);
            currentProduct.Amount = update.Amount;

            db.Entry(currentProduct).State = EntityState.Modified;
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("api/DeleteCartProduct")]
        [HttpGet]
        public IHttpActionResult DeleteProduct(string userId, int productId)
        {
            var currentUserCart = db.ShoppingCarts.FirstOrDefault(c => c.User.Id == userId);
            var userProducts = GetProductsAndAmounts(userId);
            var currentProduct = userProducts.FirstOrDefault(p => p.ProductID == productId);

            currentUserCart.ShoppingCartProducts.Remove(currentProduct);

            db.Entry(currentProduct).State = EntityState.Deleted;
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ShoppingCartExists(string id)
        {
            return db.ShoppingCarts.Count(e => e.ShoppingCartID == id) > 0;
        }
    }
}