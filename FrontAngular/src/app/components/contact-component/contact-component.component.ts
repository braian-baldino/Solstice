import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {


  constructor(private contactService:ContactService,
              private router:Router) { }

  @Input() data: IContact;
  @Input() title: string;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() actionCreated = new EventEmitter<boolean>();

  post:boolean;
  contact :IContact = {
    id:null,
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
    this.post = (this.title === 'New') ? true:false;
    if(this.title === 'Update'){
      this.contact = this.data;
      console.log("to update-->",this.contact);     
    }
  }

   submitContact(){
     if(this.post) {
      console.log(this.contact);
      delete this.contact['id'];
      this.contactService.post(this.contact).subscribe(res => this.actionCreated.emit(true));
     }
     else{
      console.log(this.contact);
      this.contactService.put(this.contact.id,this.contact).subscribe(res => this.actionCreated.emit(true));
     } 
  }

  cancelForm(){
    this.cancel.emit(false);
  }

}
