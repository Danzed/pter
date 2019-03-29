import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// apps
import { AppsGalleryComponent } from 'src/app/pages/apps/gallery/gallery.component'
import { AppsMailComponent } from 'src/app/pages/apps/mail/mail.component'
import { AppsMessagingComponent } from 'src/app/pages/apps/messaging/messaging.component'
import { AppsProfileComponent } from 'src/app/pages/apps/profile/profile.component'

const routes: Routes = [
  {
    path: 'gallery',
    component: AppsGalleryComponent,
    data: { title: 'Apps Gallery' },
    canActivate: [AuthGuard],
  },
  {
    path: 'mail',
    component: AppsMailComponent,
    data: { title: 'Apps Mail' },
    canActivate: [AuthGuard],
  },
  {
    path: 'messaging',
    component: AppsMessagingComponent,
    data: { title: 'Apps Messaging' },
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: AppsProfileComponent,
    data: { title: 'Apps Profile' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AppsRouterModule {}
