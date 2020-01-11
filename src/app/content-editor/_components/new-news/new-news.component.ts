import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent implements OnInit {

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
      { label: 'Tytuł', controlName: 'title' },
    ];
    this.form = new FormGroup({
      content: new FormControl()
    });
    this.fields.forEach(field => {
      this.form.addControl(field.controlName, new FormControl());
    });
  }
}

