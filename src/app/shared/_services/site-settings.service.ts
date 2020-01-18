import { Injectable } from '@angular/core';
import { Footer, MainSite } from '../../site/_models';
import { Contact, General } from '../../content-editor/_models';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../_core/misc/endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingsService {

  siteName = 'Wypożyczalnia Januszex';

  mainSite: MainSite = {
    siteName: this.siteName,
    siteTitle: '',
    siteContentOne: '',
    siteContentTwo: ''
  };
  footer: Footer = {
    footerDescription: '',
    facebookLink: '',
    instagramLink: '',
    snapchatLink: '',
    twitterLink: ''
  };
  contanct: Contact = {
    address: '',
    citiesAv: '',
    mail: '',
    openHr: '',
    phone: ''
  };

  constructor(private http: HttpClient) { }

  getDataForSite(): void {
    this.http.get<General>(`${endpoints.create(endpoints.general)}${1}/`).subscribe(general => {
      this.mainSite.siteContentTwo = general.secondContent;
      this.mainSite.siteContentOne = general.firstContent;
      this.mainSite.siteName = general.name;
      this.mainSite.siteTitle = general.title;
      this.footer.twitterLink = general.twitterLink;
      this.footer.footerDescription = general.footerDescription;
      this.footer.facebookLink = general.facebookLink;
      this.footer.instagramLink = general.instagramLink;
      this.footer.snapchatLink = general.snapchatLink;
    });
    this.http.get<Contact>(`${endpoints.create(endpoints.contact)}${1}/`).subscribe(contact => {
      this.contanct.address = contact.address;
      this.contanct.citiesAv = contact.citiesAv;
      this.contanct.mail = contact.mail;
      this.contanct.openHr = contact.openHr;
      this.contanct.phone = contact.phone;
    });
  }

}
