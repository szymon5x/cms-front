import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, LoginComponent, NewCarComponent } from './_components';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'new-car', component: NewCarComponent }
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  declarations: [ DashboardComponent, LoginComponent, NewCarComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class ContentEditorModule {
}
