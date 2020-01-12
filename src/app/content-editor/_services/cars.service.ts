import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../_models';
import { endpoints } from '../../_core/misc/endpoints/endpoints';

@Injectable()
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(endpoints.create(endpoints.cars));
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${endpoints.create(endpoints.cars)}/${id}/`);
  }

  postCar(car): Observable<Car> {
    return this.http.post<Car>(endpoints.create(endpoints.cars), car);
  }

  putCar(id: number, car): Observable<Car> {
    return this.http.put<Car>(`${endpoints.create(endpoints.cars)}/${id}/`, car);
  }

  deleteCar(id: number): Observable<null> {
    return this.http.delete<null>(`${endpoints.create(endpoints.cars)}/${id}/`);
  }
}
