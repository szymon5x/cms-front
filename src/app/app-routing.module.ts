import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./content-editor/content-editor.module').then(m => m.ContentEditorModule)
  },
  {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
