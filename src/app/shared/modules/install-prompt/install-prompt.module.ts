import { NgModule } from '@angular/core';
import { SharedModule } from '../../style/shared-module.module';
import { InstallPromptComponent } from './install-prompt.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    InstallPromptComponent
  ],
  exports: [
    InstallPromptComponent
  ]
})
export class InstallPromptModule{ }
