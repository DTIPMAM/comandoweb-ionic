import { SharedModule } from './../../style/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPrintMarkComponent } from './user-print-mark.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserPrintMarkComponent],
  exports: [UserPrintMarkComponent]
})
export class UserPrintMarkModule { }
