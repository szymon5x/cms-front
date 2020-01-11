import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../_services/cars.service';
import { Car } from '../../_models';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: [ './cars.component.scss' ],
  providers: [ CarsService ]
})
export class CarsComponent implements OnInit {
  cars: { description: string; id: number, endpoint: (string | number)[] }[];

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.getCars();
  }

  deleteCar(id: number) {
    this.carsService.deleteCar(id).subscribe(() => this.getCars());
  }

  private getCars() {
    this.carsService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars.map(car => {
        return {
          id: car.id,
          description: 'Samochód: ' + car.name + ' ' + car.model + ' Cena: ' + car.price + ' zł',
          endpoint: ['/admin', 'new-car', car.id]
        };
      });
    });

  }
}
