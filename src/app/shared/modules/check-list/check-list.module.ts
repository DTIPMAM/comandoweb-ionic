import { SharedModule } from '../../style/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListComponent } from './check-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CheckListComponent
  ],
  exports: [
    CheckListComponent
  ]
})
export class CheckListModule { }
