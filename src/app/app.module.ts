import { MaintenanceComponent } from './errors/maintenance/maintenance.component';
import { CustomMatPaginatorIntlService } from './services/customMatPaginatorIntl.service';
import { UserPrintMarkModule } from './shared/modules/user-print-mark/user-print-mark.module';
import { SharedModule } from './shared/style/shared-module.module';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/modules/footer/footer.module';
import { HeaderModule } from './shared/modules/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { NgxResizeObserverModule } from 'ngx-resize-observer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { UpdateAppModalModule } from './shared/modules/update-app-modal/update-app-modal.module';
import { InstallPromptModule } from './shared/modules/install-prompt/install-prompt.module';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    GlobalErrorComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    SharedModule,
    UserPrintMarkModule,
    HttpClientModule,
    NgxResizeObserverModule,
    UpdateAppModalModule,
    InstallPromptModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntlService,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
