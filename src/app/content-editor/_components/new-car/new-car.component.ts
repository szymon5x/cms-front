import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: [ './new-car.component.scss' ]
})
export class NewCarComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    model: new FormControl(),
    price: new FormControl(),
    photo: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm(): void {

  }
}
