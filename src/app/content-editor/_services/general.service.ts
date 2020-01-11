import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { General } from '../_models';
import { endpoints } from '../../_core/misc/endpoints/endpoints';

@Injectable()

export class GeneralService {

  constructor(
    private http: HttpClient
  ) { }

  getGeneralInfo(): Observable<General> {
    return this.http.get<General>(`${endpoints.create(endpoints.general)}${1}/`);
  }

  postGeneralInfo(generalInfo: General): Observable<General> {
    return this.http.post<General>(endpoints.create(endpoints.general), generalInfo);
  }

  putGeneralInfo(generalInfo: General): Observable<General> {
    return this.http.put<General>(`${endpoints.create(endpoints.general)}${1}/`, generalInfo);
  }
}
