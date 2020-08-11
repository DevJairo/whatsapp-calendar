import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './components/list-client/list-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ListClientComponent, FormClientComponent],
  declarations: [ListClientComponent, FormClientComponent]
})
export class ClienteModule { }
