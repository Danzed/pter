import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// icons
import { IconsFontawesomeComponent } from 'src/app/pages/icons/fontawesome/fontawesome.component'
import { IconsIcomoonComponent } from 'src/app/pages/icons/icomoon/icomoon.component'
import { IconsLinearComponent } from 'src/app/pages/icons/linear/linear.component'

const routes: Routes = [
  {
    path: 'fontawesome',
    component: IconsFontawesomeComponent,
    data: { title: 'Antd' },
    canActivate: [AuthGuard],
  },
  {
    path: 'icomoon',
    component: IconsIcomoonComponent,
    data: { title: 'Antd' },
    canActivate: [AuthGuard],
  },
  {
    path: 'linear',
    component: IconsLinearComponent,
    data: { title: 'Antd' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class IconsRouterModule {}
