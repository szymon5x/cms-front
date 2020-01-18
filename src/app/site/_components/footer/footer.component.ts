import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from '../../../shared/_services/site-settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private siteSettingsService: SiteSettingsService
  ) { }

  ngOnInit() {
  }

}
