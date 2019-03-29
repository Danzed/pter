import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { PagesRouterModule } from './pages-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'

// pages
import { PagesInvoiceComponent } from 'src/app/pages/pages/invoice/invoice.component'
import { PagesLockscreenComponent } from 'src/app/pages/pages/lockscreen/lockscreen.component'
import { PagesLoginAlphaComponent } from 'src/app/pages/pages/login-alpha/login-alpha.component'
import { PagesLoginBetaComponent } from 'src/app/pages/pages/login-beta/login-beta.component'
import { PagesPricingTableComponent } from 'src/app/pages/pages/pricing-table/pricing-table.component'
import { PagesRegisterComponent } from 'src/app/pages/pages/register/register.component'

const COMPONENTS = [
  PagesInvoiceComponent,
  PagesLockscreenComponent,
  PagesLoginAlphaComponent,
  PagesLoginBetaComponent,
  PagesPricingTableComponent,
  PagesRegisterComponent,
]

@NgModule({
  imports: [SharedModule, PagesRouterModule, CleanUIModule],
  declarations: [...COMPONENTS],
})
export class PagesModule {}
