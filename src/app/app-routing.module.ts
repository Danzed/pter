import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'

// layouts & notfound
import { LayoutLoginComponent } from 'src/app/layouts/Login/login.component'
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'
import { NotFoundComponent } from 'src/app/pages/404.component'

// user
import { LoginComponent } from 'src/app/pages/user/login/login.component'
import { ForgotComponent } from 'src/app/pages/user/forgot/forgot.component'

const COMPONENTS = [LoginComponent, ForgotComponent, NotFoundComponent]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/alpha',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: LayoutLoginComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
      { path: 'forgot', component: ForgotComponent, data: { title: 'Restore Password' } },
    ],
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'src/app/pages/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'antd',
        loadChildren: 'src/app/pages/antd/antd.module#AntdModule',
      },
      {
        path: 'apps',
        loadChildren: 'src/app/pages/apps/apps.module#AppsModule',
      },
      {
        path: 'blog',
        loadChildren: 'src/app/pages/blog/blog.module#BlogModule',
      },
      {
        path: 'youtube',
        loadChildren: 'src/app/pages/youtube/youtube.module#YoutubeModule',
      },
      {
        path: 'ecommerce',
        loadChildren: 'src/app/pages/ecommerce/ecommerce.module#EcommerceModule',
      },
      {
        path: 'pages',
        loadChildren: 'src/app/pages/pages/pages.module#PagesModule',
      },
      {
        path: 'github',
        loadChildren: 'src/app/pages/github/github.module#GithubModule',
      },
      {
        path: 'icons',
        loadChildren: 'src/app/pages/icons/icons.module#IconsModule',
      },
      {
        path: 'charts',
        loadChildren: 'src/app/pages/charts/charts.module#ChartsModule',
      },
      {
        path: 'layout',
        loadChildren: 'src/app/pages/layout/layout.module#LayoutModule',
      },
      {
        path: 'system',
        loadChildren: 'src/app/pages/system/system.module#SystemModule',
      },
      { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
    ],
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule { }
