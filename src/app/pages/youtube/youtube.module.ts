import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { YoutubeRouterModule } from './youtube-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'

// youtube
import { YoutubeFeedComponent } from 'src/app/pages/youtube/feed/feed.component'
import { YoutubeViewComponent } from 'src/app/pages/youtube/view/view.component'

const COMPONENTS = [YoutubeFeedComponent, YoutubeViewComponent]

@NgModule({
  imports: [SharedModule, YoutubeRouterModule, CleanUIModule],
  declarations: [...COMPONENTS],
})
export class YoutubeModule {}
