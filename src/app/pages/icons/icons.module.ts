import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { IconsRouterModule } from './icons-routing.module'

// icons
import { IconsFontawesomeComponent } from 'src/app/pages/icons/fontawesome/fontawesome.component'
import { IconsIcomoonComponent } from 'src/app/pages/icons/icomoon/icomoon.component'
import { IconsLinearComponent } from 'src/app/pages/icons/linear/linear.component'

const COMPONENTS = [IconsFontawesomeComponent, IconsIcomoonComponent, IconsLinearComponent]

@NgModule({
  imports: [SharedModule, IconsRouterModule],
  declarations: [...COMPONENTS],
})
export class IconsModule {}
