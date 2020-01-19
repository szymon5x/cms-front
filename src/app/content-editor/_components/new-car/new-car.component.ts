import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarsService } from '../../_services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: [ './new-car.component.scss' ],
  providers: [ CarsService ]
})
export class NewCarComponent implements OnInit {

  loading = false;
  id: string;
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    model: new FormControl(),
    price: new FormControl(),
    photo: new FormControl()
  });

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loading = true;
      this.carsService.getCar(+this.id).subscribe(car => {
        Object.keys(car).forEach(key => {
          this.form.get(key).setValue(car[key]);
        });
        this.loading = false;
      });
    }
  }

  submitForm(createNew: boolean): void {
    const formValues = this.form.value;
    const formData = new FormData();
    Object.keys(formValues).forEach(key => {
      formData.append(key, formValues[key]);
    });
    if (this.id) {
      if (typeof formData.get('photo') === 'string') {
        formData.delete('photo');
      }
      this.carsService.putCar(+this.id, formData).subscribe(() => {
        createNew ? this.form.reset() : this.router.navigate([ '/admin', 'cars' ]);
      });
    } else {
      this.carsService.postCar(formData).subscribe(() => {
        createNew ? this.form.reset() : this.router.navigate([ '/admin', 'cars' ]);
      });
    }
  }

  setPhotoValue(event) {
    if (event.target.files.length > 0) {
      this.form.get('photo').setValue(event.target.files[0]);
    }
  }
}
