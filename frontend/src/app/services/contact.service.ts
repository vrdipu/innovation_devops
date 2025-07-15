import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  id?: number;
  name: string;
  email: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = '/contactlist';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateContact(id: number, contact: Contact): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, contact);
  }
}