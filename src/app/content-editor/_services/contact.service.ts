import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../_models';
import { endpoints } from '../../_core/misc/endpoints/endpoints';

@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  getContact(): Observable<Contact> {
    return this.http.get<Contact>(`${endpoints.create(endpoints.contact)}${1}/`);
  }

  postContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(endpoints.create(endpoints.contact), contact);
  }

  putContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${endpoints.create(endpoints.contact)}${1}/`, contact);
  }
}
