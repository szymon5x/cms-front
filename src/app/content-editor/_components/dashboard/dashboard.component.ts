import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../_core/auth/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  navigationButtons: { name: string; url: string; }[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.navigationButtons = [
      { name: 'Strona', url: '/' },
      { name: 'Główne ustawienia', url: 'general' },
      { name: 'Kontakt', url: 'contact' },
      { name: 'Samochody', url: 'cars' },
      { name: 'Dodaj samochód', url: 'new-car' },
      { name: 'Newsy', url: 'news' },
      { name: 'Dodaj newsa', url: 'new-news' }
    ];
    this.router.navigate([ '/admin', 'general' ]);
  }

  logOut() {
    this.userService.logout().subscribe(() => this.router.navigate([ '/home' ]));
  }
}
