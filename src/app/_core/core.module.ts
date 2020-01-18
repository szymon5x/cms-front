import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentEditorGuard } from './_guards/content-editor.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    ContentEditorGuard,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
