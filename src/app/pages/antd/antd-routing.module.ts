import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// antd
import { AntdIndexComponent } from 'src/app/pages/antd/index/index.component'

const routes: Routes = [
  {
    path: 'index',
    component: AntdIndexComponent,
    data: { title: 'Antd' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AntdRouterModule {}
