import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGaleryComponent } from './image-galery.component';
import { SharedModule } from '../../style/shared-module.module';
import { NgMagnizoomModule } from 'ng-magnizoom';
import { NgxResizeObserverModule } from 'ngx-resize-observer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgMagnizoomModule,
    NgxResizeObserverModule
  ],
  declarations: [
    ImageGaleryComponent
  ],
  exports: [
    ImageGaleryComponent
  ]
})
export class ImageGaleryModule { }
