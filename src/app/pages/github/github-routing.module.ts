import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// github
import { GithubDiscussComponent } from 'src/app/pages/github/discuss/discuss.component'
import { GithubExploreComponent } from 'src/app/pages/github/explore/explore.component'

const routes: Routes = [
  {
    path: 'discuss',
    component: GithubDiscussComponent,
    data: { title: 'Github Discuss' },
    canActivate: [AuthGuard],
  },
  {
    path: 'explore',
    component: GithubExploreComponent,
    data: { title: 'Github Explore' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class GithubRouterModule {}
