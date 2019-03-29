import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AntdRouterModule } from './antd-routing.module'

// antd
import { AntdIndexComponent } from 'src/app/pages/antd/index/index.component'

const COMPONENTS = [AntdIndexComponent]

@NgModule({
  imports: [SharedModule, AntdRouterModule],
  declarations: [...COMPONENTS],
})
export class AntdModule {}
