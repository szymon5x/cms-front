import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './_core/core.module';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',    // in what cookie csrf token is stored
      headerName: 'X-CSRFToken',  // as what header csrf token should be submitted
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
