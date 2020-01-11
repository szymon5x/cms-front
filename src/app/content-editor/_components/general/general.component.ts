import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

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
      { label: 'Nazwa', controlName: 'name' },
      { label: 'Tytuł', controlName: 'title' },
    ];
    this.form = new FormGroup({
      firstContent: new FormControl(),
      secondContent: new FormControl(),
    });
    this.fields.forEach(field => {
      this.form.addControl(field.controlName, new FormControl());
    });
  }
}
