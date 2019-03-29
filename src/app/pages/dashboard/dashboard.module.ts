import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'
import { ChartistModule } from 'ng-chartist'
import { NvD3Module } from 'ng2-nvd3'

import 'd3'
import 'nvd3'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'
import { DashboardBetaComponent } from 'src/app/pages/dashboard/beta/beta.component'
import { DashboardCryptoComponent } from 'src/app/pages/dashboard/crypto/crypto.component'
import { DashboardGammaComponent } from 'src/app/pages/dashboard/gamma/gamma.component'
import { DashboardDocsComponent } from 'src/app/pages/dashboard/docs/docs.component'

const COMPONENTS = [
  DashboardAlphaComponent,
  DashboardBetaComponent,
  DashboardCryptoComponent,
  DashboardGammaComponent,
  DashboardDocsComponent,
]

@NgModule({
  imports: [
    SharedModule,
    DashboardRouterModule,
    CleanUIModule,
    ChartistModule,
    NvD3Module,
    FormsModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
