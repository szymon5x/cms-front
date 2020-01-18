import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../_services/site.service';
import { Car } from '../../../content-editor/_models';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: [ './cars.component.scss' ]
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

}
