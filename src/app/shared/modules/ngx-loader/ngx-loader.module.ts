import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoaderComponent } from './ngx-loader.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { IonicModule } from '@ionic/angular';
import {LogoPmamLoginModule} from "../logo-pmam-login/logo-pmam-login.module";
import {SharedModule} from "../../style/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    LogoPmamLoginModule,
    SharedModule,
    NgxUiLoaderModule,
    IonicModule.forRoot()
  ],
  declarations: [NgxLoaderComponent],
  exports: [NgxLoaderComponent]
})
export class NgxLoaderModule { }
