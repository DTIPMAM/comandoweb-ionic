import { NgModule } from '@angular/core';
import { SharedModule } from '../../style/shared-module.module';
import { UpdateAppModalComponent } from './update-app-modal.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UpdateAppModalComponent
  ],
  exports: [
    UpdateAppModalComponent
  ]
})
export class UpdateAppModalModule{ }
