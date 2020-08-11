// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { FormClientComponent } from './components/form-client/form-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';

// Share components

@NgModule({
  declarations: [ListClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [ListClientComponent, FormClientComponent],
})
export class CustomersModule {}


