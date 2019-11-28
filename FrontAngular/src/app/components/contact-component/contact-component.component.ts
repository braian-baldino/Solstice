import { Component, OnInit, Output, Input } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {


  constructor(private contactService:ContactService) { }

  contact :IContact = {
    name:null,
    birthDate:null,
    city:null,
    company:null,
    email:null,
    phoneNumber:null,
    phoneType:"personal",
    profileImage:"https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png",
    state:null,
    street:null
  };

  ngOnInit() {
  }

  postContact(){
    
    console.log(this.contact);
    
    this.contactService.post(this.contact).subscribe(res => res);
  }
}
