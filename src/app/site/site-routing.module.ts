import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent, ContactComponent, HomeComponent, NewsComponent, SiteComponent } from './_components';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    // redirectTo: 'home',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SiteRoutingModule {
}
