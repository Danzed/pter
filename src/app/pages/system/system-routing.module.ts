import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { Ng2Rut, RutValidator } from 'ng2-rut'


import { AddClientComponent } from './add-client/add-client.component'
import { ClientsComponent } from './clients/clients.component'

const routes: Routes = [
  {
    path: 'add-client',
    component: AddClientComponent,
    data: { title: 'Agregar Cliente' },
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    component: ClientsComponent,
    data: { title: 'Ver Clientes' },
    canActivate: [AuthGuard],
  }
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes), Ng2Rut],
  providers: [AuthService, RutValidator],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
