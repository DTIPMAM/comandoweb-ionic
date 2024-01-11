import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadiusListComponent} from "./radius-list.component";
import {SharedModule} from "../../style/shared-module.module";



@NgModule({
  declarations: [RadiusListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[RadiusListComponent]
})
export class RadiusListModule { }
