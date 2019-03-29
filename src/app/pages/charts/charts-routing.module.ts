import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// charts
import { ChartsC3Component } from 'src/app/pages/charts/c3/c3.component'
import { ChartsChartComponent } from 'src/app/pages/charts/chart/chart.component'
import { ChartsChartistComponent } from 'src/app/pages/charts/chartist/chartist.component'
import { ChartsNvD3Component } from 'src/app/pages/charts/nvd3/nvd3.component'

const routes: Routes = [
  {
    path: 'c3',
    component: ChartsC3Component,
    data: { title: 'Charts C3' },
    canActivate: [AuthGuard],
  },
  {
    path: 'chart',
    component: ChartsChartComponent,
    data: { title: 'Charts Chart.js' },
    canActivate: [AuthGuard],
  },
  {
    path: 'chartist',
    component: ChartsChartistComponent,
    data: { title: 'Charts Chartist' },
    canActivate: [AuthGuard],
  },
  {
    path: 'nvd3',
    component: ChartsNvD3Component,
    data: { title: 'Charts nvD3' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class ChartsRouterModule {}
