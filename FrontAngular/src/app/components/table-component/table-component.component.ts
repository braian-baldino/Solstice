import {Component, OnInit, Input} from '@angular/core';
import {IContact} from './../../interfaces/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  action:string;
  contacts: IContact;
  contact: IContact;
  addShow:boolean;
  tableShow:boolean;

  constructor(private contactService:ContactService,
              private router:Router) { }

  ngOnInit() {
    this.tableShow = true;
    this.addShow = false;
    this.getAllContacts();
  }

  switchTableAndAdd(){
    this.tableShow = false;
    this.addShow = true;
    this.action = 'New';
  }

  backToTable($event){
    this.tableShow = !$event;
    this.addShow = $event;
  }

  updateTable($event){
    this.tableShow = $event;
    this.addShow = !$event;
    if($event){
      this.getAllContacts();
    }    
  }

  getAllContacts(){
    this.contactService.getAll().subscribe(res => {this.contacts = res;console.log(this.contacts);
    });
  }

  deleteContact(item){
    this.contactService.delete(item.id).subscribe(res=> this.getAllContacts());
  }

  updateContact(item){  
    this.contactService.get(item).subscribe(res =>{
      this.contact = res,
      this.action = 'Update',
      this.tableShow = false,
      this.addShow = true;
    });
  }


}
