import { Injectable } from '@angular/core';
import { endpoints } from '../misc/endpoints/endpoints';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Method checks if logged in user is authenticated.
   */
  isAuthenticated(): Observable<{ time_left: number; }> {
    const url = endpoints.create(endpoints.sessionInfoApi);
    return this.http.get<{ time_left: number; }>(url);
  }

  /**
   * Function performing logging in using user credentials. Returns Observable desciribing if logging
   * in was a success or not.
   * @param userCredentials username and password which willl be submitted for login
   */
  login(userCredentials): Observable<any> {

    const url = endpoints.create(endpoints.loginApi);

    return this.http.post(url, userCredentials, { observe: 'response' }).pipe(
      tap((response: any) => {
        if (response.status === 200) {

        } else {

        }
      }));
  }

  logout(): Observable<boolean> {
    const url = endpoints.create(endpoints.logoutApi);
    return this.http.get(url, { observe: 'response' }).pipe(
      map((res: any) => {
        return res.status === 200;
      }),
      catchError((error: any) => {
        return of(false);
      }));
  }
}
