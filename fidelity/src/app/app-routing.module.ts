import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { ListClientComponent } from './client/components/list-client/list-client.component'
import { FormClientComponent } from './client/components/form-client/form-client.component'
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', component: ListClientComponent },
  { path: 'add', component: FormClientComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
