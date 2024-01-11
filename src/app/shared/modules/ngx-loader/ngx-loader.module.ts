import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoaderComponent } from './ngx-loader.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  imports: [
    CommonModule,
    NgxUiLoaderModule
  ],
  declarations: [NgxLoaderComponent],
  exports: [NgxLoaderComponent]
})
export class NgxLoaderModule { }
