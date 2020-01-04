import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CarsComponent, ContactComponent, HomeComponent, NavbarComponent, NewsComponent, SiteComponent } from './_components';
import { SiteRoutingModule } from './site-routing.module';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [ HomeComponent, ContactComponent, SiteComponent, CarsComponent, NewsComponent, NavbarComponent ],
  imports: [
    CommonModule,
    SharedModule,
    SiteRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SiteModule {
}
