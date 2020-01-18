import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../_services/site.service';
import { Router } from '@angular/router';
import { SiteSettingsService } from '../../../shared/_services/site-settings.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
  providers: [ SiteService ]
})
export class SiteComponent implements OnInit {

  constructor(private router: Router, private siteSettingsService: SiteSettingsService) { }

  ngOnInit() {
    this.siteSettingsService.getDataForSite();
    this.router.navigate([ 'home' ]);
  }

}
