using BraianBaldino_Solstice.Controllers;
using BraianBaldino_Solstice.Data;
using BraianBaldino_Solstice.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NUnitTest
{
    public class Tests
    {
        private DataContext context;
        public ContactsController controller;
        List<Contact> contactList = new List<Contact>();

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseSqlite(connectionString: "baldinosolstice.db")
                .Options;

            this.context = new DataContext(options);

            this.controller = new ContactsController(context);

            Contact contact1 = Contact.MockedValues();
            Contact contact2 = Contact.MockedValues();
            Contact contact3 = Contact.MockedValues();

            contact2.Name = "Contact2";
            contact3.Name = "Contact3";

            //controller.InsertData(contact1);
            //controller.InsertData(contact2);
            //controller.InsertData(contact3);

            //contactList = controller.Execute();
        }

        [Test]
        public void ContextNotNull()
        {
            Assert.IsNotNull(context);
            Assert.IsNotNull(context.Contacts);
        }

        [Test]
        public void Put()
        {       
            Contact contact = Contact.MockedValues();

            var actualResponse = controller.Put(9,contact);
            
            Assert.IsInstanceOf(typeof(Task<IActionResult>), actualResponse);
        }

    }
}