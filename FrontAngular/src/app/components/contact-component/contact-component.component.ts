import { Component, OnInit, Output, Input } from '@angular/core';
import { IContact } from 'src/app/interfaces/IContact';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {


  constructor() { }

  contact :IContact = {
    id:null,
    name:null,
    birthDate:null,
    city:null,
    company:null,
    email:null,
    phoneNumber:null,
    phoneType:null,
    profileImage:null,
    state:null,
    street:null
  };

  ngOnInit() {
  }

}
