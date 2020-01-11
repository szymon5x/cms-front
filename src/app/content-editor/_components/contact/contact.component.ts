import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {
  fields: { label: string; controlName: string; }[] = [];
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  submitForm(): void {

  }

  private createForm() {
    this.fields = [
      { label: 'Dostępne miasta', controlName: 'citiesAv' },
      { label: 'Telefon', controlName: 'phone' },
      { label: 'E-mail', controlName: 'mail' },
      { label: 'Adres', controlName: 'address' },
      { label: 'Godziny otwarcia', controlName: 'openHr' },
    ];
    this.form = new FormGroup({});
    this.fields.forEach(field => {
      this.form.addControl(field.controlName, new FormControl());
    });
  }
}
