import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../auth/user.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentEditorGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated().pipe(
      map((response) => {
        if (response.time_left > 0) {
          return true;
        } else {
          this.router.navigate([ '/login' ]);
          return false;
        }
      }),
      catchError((error: any) => {
        this.router.navigate([ '/login' ]);
        return of(false);
      }));
  }
}
