import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from '../../../shared/_services/site-settings.service';
import { MainSite } from '../../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mainSite: MainSite;
  constructor(
    private siteSettingsService: SiteSettingsService
  ) { }

  ngOnInit() {
    this.mainSite = this.siteSettingsService.mainSite;
  }

}
