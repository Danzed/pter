import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// layout
import { LayoutBootstrapComponent } from 'src/app/pages/layout/bootstrap/bootstrap.component'
import { LayoutCardComponent } from 'src/app/pages/layout/card/card.component'
import { LayoutMailTemplatesComponent } from 'src/app/pages/layout/mail-templates/mail-templates.component'
import { LayoutTypographyComponent } from 'src/app/pages/layout/typography/typography.component'
import { LayoutUtilitiesComponent } from 'src/app/pages/layout/utilities/utilities.component'

const routes: Routes = [
  {
    path: 'bootstrap',
    component: LayoutBootstrapComponent,
    data: { title: 'Layout Bootstrap' },
    canActivate: [AuthGuard],
  },
  {
    path: 'card',
    component: LayoutCardComponent,
    data: { title: 'Layout Card' },
    canActivate: [AuthGuard],
  },
  {
    path: 'mail-templates',
    component: LayoutMailTemplatesComponent,
    data: { title: 'Layout Mail Templates' },
    canActivate: [AuthGuard],
  },
  {
    path: 'typography',
    component: LayoutTypographyComponent,
    data: { title: 'Layout Typography' },
    canActivate: [AuthGuard],
  },
  {
    path: 'utilities',
    component: LayoutUtilitiesComponent,
    data: { title: 'Layout Utilities' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class LayoutRouterModule {}
