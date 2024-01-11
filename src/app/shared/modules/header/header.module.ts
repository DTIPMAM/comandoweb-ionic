import { LeftBarComponent } from './left-bar/left-bar.component';
import { SharedModule } from './../../style/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserBarComponent } from './user-bar/user-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    UserBarComponent,
    LeftBarComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
