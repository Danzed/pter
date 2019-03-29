import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// youtube
import { YoutubeFeedComponent } from 'src/app/pages/youtube/feed/feed.component'
import { YoutubeViewComponent } from 'src/app/pages/youtube/view/view.component'

const routes: Routes = [
  {
    path: 'feed',
    component: YoutubeFeedComponent,
    data: { title: 'Youtube Feed' },
    canActivate: [AuthGuard],
  },
  {
    path: 'view',
    component: YoutubeViewComponent,
    data: { title: 'Youtube View' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class YoutubeRouterModule {}
