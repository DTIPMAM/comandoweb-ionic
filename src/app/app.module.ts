import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './modules/login/login.component';
import IonicStepperModule from "ionic-stepper";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "./modules/login/login.module";
import {HeaderModule} from "./shared/modules/header/header.module";
import {MatProgressBar} from "@angular/material/progress-bar";
import {UserPrintMarkModule} from "./shared/modules/user-print-mark/user-print-mark.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HeaderModule,
    MatProgressBar,
    UserPrintMarkModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule { }
