import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'
import { SystemRoutingModule } from './system-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AddClientComponent } from './add-client/add-client.component'


@NgModule({
  declarations: [AddClientComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CleanUIModule,
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
