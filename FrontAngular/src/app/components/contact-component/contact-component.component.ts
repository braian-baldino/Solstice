import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {


  constructor(private contactService:ContactService,
              private router:Router) { }

  @Output() postCreated = new EventEmitter<boolean>();

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
    this.reload();
  }

  reload(){
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(()=>
    this.router.navigateByUrl('/contactList'));
  }
}
