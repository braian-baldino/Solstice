using BraianBaldino_Solstice.Models.Enumerables;
using System;
using System.ComponentModel.DataAnnotations;

namespace BraianBaldino_Solstice.Models
{
    public class Contact
    {
        #region Atributes
        public int Id { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "The Name cannot exceed 30 characters")]
        public string Name { get; set; }

        public string Company { get; set; }

        public string ProfileImage { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        public string phoneType;

        public string Street { get; set; }

        public string City { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "The State/Province name cannot exceed 30 characters")]
        public string State { get; set; }
        #endregion

        #region Properties Validations
        public string PhoneType
        {
            get { return this.phoneType; }
            set
            {
                if (value.ToLowerInvariant() == PhoneTypes.personal || value.ToLowerInvariant() == PhoneTypes.work)
                    this.phoneType = value;
                else
                    this.phoneType = PhoneTypes.personal;
            }
        }
        #endregion

        #region Constructor
        public Contact()
        {
            //Initializes a default profile image.
            this.ProfileImage = "https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png";
        }
        #endregion

        #region Methods
        public static Contact MockedValues()
        {
            Contact contact = new Contact();

            contact.Id = 1;
            contact.Name = "George Smith";
            contact.Company = "Solstice";
            contact.Email = "geoSmith@solstice.com";
            contact.BirthDate = DateTime.Today;
            contact.PhoneNumber = "+5411020345";
            contact.PhoneType = PhoneTypes.personal;
            contact.Street = "505 Main Street";
            contact.City = "Chicago";
            contact.State = "Illinois";
            return contact;
        }
        #endregion

    }
}