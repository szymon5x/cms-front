import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car, Contact, General, News } from '../../content-editor/_models';
import { endpoints } from '../../_core/misc/endpoints/endpoints';

@Injectable()
export class SiteService {

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(endpoints.create(endpoints.cars));
  }
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(endpoints.create(endpoints.news));
  }

}
