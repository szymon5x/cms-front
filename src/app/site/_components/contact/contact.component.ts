import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from '../../../shared/_services/site-settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit() {
  }

}
