import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { LayoutRouterModule } from './layout-routing.module'

// layout
import { LayoutBootstrapComponent } from 'src/app/pages/layout/bootstrap/bootstrap.component'
import { LayoutCardComponent } from 'src/app/pages/layout/card/card.component'
import { LayoutMailTemplatesComponent } from 'src/app/pages/layout/mail-templates/mail-templates.component'
import { LayoutTypographyComponent } from 'src/app/pages/layout/typography/typography.component'
import { LayoutUtilitiesComponent } from 'src/app/pages/layout/utilities/utilities.component'

const COMPONENTS = [
  LayoutBootstrapComponent,
  LayoutCardComponent,
  LayoutMailTemplatesComponent,
  LayoutTypographyComponent,
  LayoutUtilitiesComponent,
]

@NgModule({
  imports: [SharedModule, LayoutRouterModule],
  declarations: [...COMPONENTS],
})
export class LayoutModule {}
