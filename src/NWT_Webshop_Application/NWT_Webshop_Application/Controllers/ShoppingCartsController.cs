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

        // GET: api/ShoppingCarts
        public IQueryable<ShoppingCart> GetShoppingCarts()
        {
            return db.ShoppingCarts;
        }

        // GET: api/ShoppingCarts/5
        [ResponseType(typeof(ShoppingCart))]
        public IHttpActionResult GetShoppingCart(string id)
        {
            ShoppingCart shoppingCart = db.ShoppingCarts.Find(id);
            if (shoppingCart == null)
            {
                return NotFound();
            }

            return Ok(shoppingCart);
        }

        // PUT: api/ShoppingCarts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutShoppingCart(string id, ShoppingCart shoppingCart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != shoppingCart.ShoppingCartID)
            {
                return BadRequest();
            }

            db.Entry(shoppingCart).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShoppingCartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

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