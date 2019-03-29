import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AppsRouterModule } from './apps-routing.module'
import { CleanUIModule } from '../../components/CleanUIComponents/cleanui.module'

// antd
import { AppsGalleryComponent } from 'src/app/pages/apps/gallery/gallery.component'
import { AppsMailComponent } from 'src/app/pages/apps/mail/mail.component'
import { AppsMessagingComponent } from 'src/app/pages/apps/messaging/messaging.component'
import { AppsProfileComponent } from 'src/app/pages/apps/profile/profile.component'

const COMPONENTS = [
  AppsGalleryComponent,
  AppsMailComponent,
  AppsMessagingComponent,
  AppsProfileComponent,
]

@NgModule({
  imports: [SharedModule, AppsRouterModule, CleanUIModule],
  declarations: [...COMPONENTS],
})
export class AppsModule {}
