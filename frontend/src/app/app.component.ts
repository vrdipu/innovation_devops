import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  contacts: Contact[] = [];
  newContact: Contact = { name: '', email: '', number: '' };
  editingContact: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(data => this.contacts = data);
  }

  addContact() {
    this.contactService.addContact(this.newContact).subscribe(() => {
      this.newContact = { name: '', email: '', number: '' };
      this.loadContacts();
    });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(() => this.loadContacts());
  }

  editContact(contact: Contact) {
    this.editingContact = { ...contact };
  }

  updateContact() {
    if (this.editingContact && this.editingContact.id) {
      this.contactService.updateContact(this.editingContact.id, this.editingContact).subscribe(() => {
        this.editingContact = null;
        this.loadContacts();
      });
    }
  }

  cancelEdit() {
    this.editingContact = null;
  }
}