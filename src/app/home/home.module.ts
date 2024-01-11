import { BreadcrumbModule } from './../shared/modules/breadcrumb/breadcrumb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    HomeRoutes
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
