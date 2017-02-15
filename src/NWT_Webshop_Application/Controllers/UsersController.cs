using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using NWT_Webshop_Application.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace NWT_Webshop_Application.Controllers
{
    [Authorize]
    public class UsersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        //GET: /api/GetCurrentUser
        [Route("api/GetCurrentUser")]
        [HttpGet]
        public ApplicationUser GetCurrentUser()
        {
            string currentUserId = User.Identity.GetUserId();
            return db.Users.FirstOrDefault(x => x.Id == currentUserId);
        }

        private bool UserExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }

        [Route("api/UpdateCurrentUser")]
        [HttpPut]
        public IHttpActionResult UpdateCurrentUser(ApplicationUser user)
        {
            var currentUser = GetCurrentUser();

            currentUser.FirstName = user.FirstName;
            currentUser.LastName = user.LastName;
            currentUser.Email = user.Email;
            currentUser.Address = user.Address;

            //if email is changed, we have to change username
            //accordingly since email is used as username
            if (currentUser.UserName != user.Email)
            {
                currentUser.UserName = user.Email;
            }

            db.Entry(currentUser).State = EntityState.Modified;

            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);

        }

    }
}
