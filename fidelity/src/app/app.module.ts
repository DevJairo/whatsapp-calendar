import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

// Own Modules
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';


// Components
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { ServiceWorkerModule } from '@angular/service-worker';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CustomersModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    SharedModule,
    DashboardModule,
    DemoNgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

