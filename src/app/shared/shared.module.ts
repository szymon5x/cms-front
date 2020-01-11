import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './_components/items-list/items-list.component';
import { MatButtonModule, MatIconModule, MatListModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

  @NgModule({
    declarations: [ ItemsListComponent ],
    exports: [
      ItemsListComponent
    ],
    imports: [
      CommonModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      RouterModule,
      MatTooltipModule
    ]
  })
export class SharedModule { }
