import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'http://localhost:5000/api/';

constructor(private http: HttpClient) { }

getAll(where) {
  return this.http.get(this.baseURL + where);
}

getContact(where, id) {
  return this.http.get(this.baseURL + where + '/' + "getbyid" + '/' + id);
}

postAll(where, form): Observable<any> {
  return this.http.post(this.baseURL + where, form);
}

put(where, id, form): Observable<any> {
  return this.http.put(this.baseURL + where + '/' + id, form);
}

delete(id): Observable<any> {
  return this.http.delete(this.baseURL + id);
}

}
