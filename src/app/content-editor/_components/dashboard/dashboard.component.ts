import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  navigationButtons: { name: string; url: string; }[];

  constructor() {
  }

  ngOnInit() {
    this.navigationButtons = [
      { name: 'Home', url: '/admin' },
      { name: 'Strona', url: '/' },
      { name: 'Główne ustawienia', url: 'general' },
      { name: 'Dane', url: 'contact' },
      { name: 'Samochody', url: 'cars' },
      { name: 'Dodaj samochód', url: 'new-car' },
      { name: 'Newsy', url: 'news' },
      { name: 'Dodaj newsa', url: 'new-news' }
    ];
  }

}
