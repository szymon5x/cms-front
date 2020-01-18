import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SiteSettingsService } from '../../../shared/_services/site-settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {

  siteName = this.siteSettingsService.siteName;
  error: string | null;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private siteSettingsService: SiteSettingsService
  ) {
  }

  submit() {
    if (this.form.valid) {
      // TODO - perform login action
    }
  }

}
