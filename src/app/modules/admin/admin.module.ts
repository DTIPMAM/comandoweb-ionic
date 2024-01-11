import { BreadcrumbModule } from '../../shared/modules/breadcrumb/breadcrumb.module';
import { SharedModule } from '../../shared/style/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {ChipListModule} from "../../shared/modules/chip-list/chip-list.module";
import { AdminRoutes } from './admin.routing';
import {NgxLoaderModule} from "../../shared/modules/ngx-loader/ngx-loader.module";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BreadcrumbModule,
    ChipListModule,
    MatButtonModule,
    AdminRoutes,
    NgxLoaderModule

  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }
