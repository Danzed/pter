import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// pages
import { PagesInvoiceComponent } from 'src/app/pages/pages/invoice/invoice.component'
import { PagesLockscreenComponent } from 'src/app/pages/pages/lockscreen/lockscreen.component'
import { PagesLoginAlphaComponent } from 'src/app/pages/pages/login-alpha/login-alpha.component'
import { PagesLoginBetaComponent } from 'src/app/pages/pages/login-beta/login-beta.component'
import { PagesPricingTableComponent } from 'src/app/pages/pages/pricing-table/pricing-table.component'
import { PagesRegisterComponent } from 'src/app/pages/pages/register/register.component'

const routes: Routes = [
  {
    path: 'invoice',
    component: PagesInvoiceComponent,
    data: { title: 'Pages Invoice' },
    canActivate: [AuthGuard],
  },
  {
    path: 'lockscreen',
    component: PagesLockscreenComponent,
    data: { title: 'Pages Lockscreen' },
    canActivate: [AuthGuard],
  },
  {
    path: 'login-alpha',
    component: PagesLoginAlphaComponent,
    data: { title: 'Pages Login Alpha' },
    canActivate: [AuthGuard],
  },
  {
    path: 'login-beta',
    component: PagesLoginBetaComponent,
    data: { title: 'Pages Login Beta' },
    canActivate: [AuthGuard],
  },
  {
    path: 'pricing-table',
    component: PagesPricingTableComponent,
    data: { title: 'Pages Pricing Table' },
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: PagesRegisterComponent,
    data: { title: 'Pages Register' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class PagesRouterModule {}
