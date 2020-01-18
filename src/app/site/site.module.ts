import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import {
  CarsComponent,
  ContactComponent,
  HomeComponent,
  LoginComponent,
  NavbarComponent,
  NewsComponent,
  SiteComponent
} from './_components';
import { SiteRoutingModule } from './site-routing.module';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FooterComponent } from './_components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ HomeComponent,
    ContactComponent,
    SiteComponent,
    CarsComponent,
    NewsComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SiteRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SiteModule {
}
