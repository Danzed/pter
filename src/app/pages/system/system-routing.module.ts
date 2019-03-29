import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'


import { AddClientComponent } from './add-client/add-client.component'

const routes: Routes = [
  {
    path: 'add-client',
    component: AddClientComponent,
    data: { title: 'Agregar Cliente' },
    canActivate: [AuthGuard],
  }
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class SystemRoutingModule { }
