using BraianBaldino_Solstice.Controllers;
using BraianBaldino_Solstice.Data;
using BraianBaldino_Solstice.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Threading.Tasks;

namespace NUnitTest
{
    public class Tests
    {
        private DataContext context;
        public ContactsController controller;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseSqlite(connectionString: "baldinosolstice.db")
                .Options;

            this.context = new DataContext(options);

            this.controller = new ContactsController(context);
        }

        [Test]
        public void ContextNotNull()
        {
            Assert.IsNotNull(context);
            Assert.IsNotNull(context.Contacts);
        }

        [Test]
        public void PostOk()
        {
            Task<IActionResult> okRes = controller.Post(Contact.MockedValues());

            Assert.IsInstanceOf(typeof(Task<IActionResult>), okRes);
        }

    }
}