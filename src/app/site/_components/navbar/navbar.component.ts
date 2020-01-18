import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from '../../../shared/_services/site-settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  links: { route: string; name: string, icon: string }[];

  constructor(
    private siteSettingsService: SiteSettingsService
  ) {
  }

  ngOnInit() {
    this.links = [
      { route: '/home', name: 'Home', icon: 'home' },
      { route: '/cars', name: 'Flota', icon: 'directions_car' },
      { route: '/news', name: 'Aktualności', icon: 'chat_bubble' },
      { route: '/contact', name: 'Kontakt', icon: 'phone' }
    ];
  }

}
