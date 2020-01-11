import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CarsComponent,
  ContactComponent,
  DashboardComponent,
  GeneralComponent,
  LoginComponent,
  NewCarComponent,
  NewNewsComponent,
  NewsComponent
} from './_components';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'new-car/:id', component: NewCarComponent },
      { path: 'new-car', component: NewCarComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'new-news', component: NewNewsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'general', component: GeneralComponent },
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  declarations: [ DashboardComponent, LoginComponent, NewCarComponent, ContactComponent, NewsComponent, CarsComponent, NewNewsComponent, GeneralComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class ContentEditorModule {
}
