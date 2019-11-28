import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { IContact } from '../interfaces/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

mainRoute = "contacts";

constructor(private api:ApiService) { }

get(id): Observable<any> {
  return this.api.getContact(this.mainRoute, id);
}

getAll(): Observable<any> {
  return this.api.getAll(this.mainRoute);
}

post(form): Observable<any> {
  return this.api.postAll(this.mainRoute, form);
}

put(id, data): Observable<any> {
  return this.api.put(this.mainRoute, id, data);
}

delete(id): Observable<any> {
  return this.api.delete(`${this.mainRoute}/${id}`);
}

}
