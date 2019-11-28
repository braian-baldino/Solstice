using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BraianBaldino_Solstice.Data;
using BraianBaldino_Solstice.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BraianBaldino_Solstice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly DataContext context;

        public ContactsController(DataContext _context)
        {
            this.context = _context;
        }

        // GET api/contact
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var contacts = await context.Contacts.ToListAsync();

            return Ok(contacts);
        }

        // GET api/contact/5
        [HttpGet]
        [Route("GetbyId/{id}")]
        public async Task<IActionResult> GetContact(int id)
        {
            var contact = await context.Contacts.FirstOrDefaultAsync(c => c.Id == id);

            if(contact == null)
            {
                return NotFound("The contact cannot be found");
            }

            return Ok(contact);
        }

        // GET api/contact/state
        [HttpGet]
        [Route("GetByPhone/{phoneNumber}")]
        public async Task<IActionResult> GetContactByPhone(string phoneNumber)
        {
            var contact = await context.Contacts.Where(c => c.PhoneNumber == phoneNumber).ToListAsync();

            if (contact.Count == 0)
            {
                return NotFound("No contact for the requested phone number");
            }

            return Ok(contact);
        }

        // GET api/contact/state
        [HttpGet]
        [Route("GetbyState/{state}")]
        public async Task<IActionResult> GetContactByState(string state)
        {
            var contact = await context.Contacts.Where(c => c.State == state).ToListAsync();

            if (contact.Count == 0)
            {
                return NotFound("No contacts for the state record");
            }

            return Ok(contact);
        }

        // GET api/contact/state
        [HttpGet]
        [Route("GetByCity/{city}")]
        public async Task<IActionResult> GetContactByCity(string city)
        {
            var contact = await context.Contacts.Where(c => c.City == city).ToListAsync();

            if (contact.Count == 0)
            {
                return NotFound("No contacts for the city record");
            }

            return Ok(contact);
        }

        //POST api/contact
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Contact contact)
        {
            if (contact == null)
            {
                return BadRequest("contact is null.");
            }

            await context.AddAsync(contact);
            await context.SaveChangesAsync();
            return CreatedAtAction("Post", contact);
        }

        // PUT api/contact/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute]int id, [FromBody] Contact contact)
        {
           
            if (id != contact.Id)
            {
                return BadRequest();
            }

            if (!ContactExists(id))
                return NotFound("The contact couldn't be found");

            context.Entry(contact).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
                 return Ok(contact);
            }                               
            catch (Exception ex)
            {
                    throw new Exception("Couldn't modify contact",ex);
            }

        }

        // DELETE api/contact/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            Contact contact = context.Contacts.Find(id);

            if (contact != null)
            {
                context.Contacts.Remove(contact);
                await context.SaveChangesAsync();
                return Ok(contact);
            }
            else
                return NotFound("Contact couldn´t be found.");
        }

        #region Private Methods
        private bool ContactExists(int id)
        {
            return context.Contacts.Any(c => c.Id == id);
        }
        #endregion
    }
}