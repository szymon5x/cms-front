import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {
  fields: { label: string; controlName: string; }[] = [];
  form: FormGroup;
  loading = true;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.contactService.getContact().subscribe(contact => {
      this.form.setValue(contact);
      this.loading = false;
    }, error => {
      this.contactService.postContact(this.form.value).subscribe();
    });
  }

  submitForm(): void {
    this.contactService.putContact(this.form.value).subscribe();
  }

  private createForm() {
    this.fields = [
      { label: 'Dostępne miasta', controlName: 'citiesAv' },
      { label: 'Telefon', controlName: 'phone' },
      { label: 'E-mail', controlName: 'mail' },
      { label: 'Adres', controlName: 'address' },
      { label: 'Godziny otwarcia', controlName: 'openHr' },
    ];
    this.form = new FormGroup({
      id: new FormControl()
    });
    this.fields.forEach(field => {
      this.form.addControl(field.controlName, new FormControl());
    });
  }
}
