import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoaderComponent } from './ngx-loader.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    IonicModule.forRoot()
  ],
  declarations: [NgxLoaderComponent],
  exports: [NgxLoaderComponent]
})
export class NgxLoaderModule { }
