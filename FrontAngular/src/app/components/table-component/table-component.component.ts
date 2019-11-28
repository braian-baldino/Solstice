import {Component, OnInit} from '@angular/core';
import {IContact} from './../../interfaces/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  contacts: IContact;
  addShow:boolean;
  tableShow:boolean;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.tableShow = true;
    this.addShow = false;
    this.getAllContacts();
  }

  switchTableAndAdd(){
    this.tableShow = false;
    this.addShow = true;
  }

  getAllContacts(){
    this.contactService.getAll().subscribe(res => {this.contacts = res;console.log(this.contacts);
    });
  }

  deleteContact(item){
    this.contactService.delete(item.id).subscribe(res=>res);
  }

}
