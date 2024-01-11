import { SharedModule } from '../../style/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipListComponent } from './chip-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ChipListComponent
  ],
  exports: [
    ChipListComponent
  ]
})
export class ChipListModule { }
