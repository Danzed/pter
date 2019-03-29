import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { GithubRouterModule } from './github-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'
import { FormsModule } from '@angular/forms'
import { QuillModule } from 'ngx-quill'
// github
import { GithubDiscussComponent } from 'src/app/pages/github/discuss/discuss.component'
import { GithubExploreComponent } from 'src/app/pages/github/explore/explore.component'

const COMPONENTS = [GithubDiscussComponent, GithubExploreComponent]

@NgModule({
  imports: [SharedModule, GithubRouterModule, FormsModule, CleanUIModule, QuillModule],
  declarations: [...COMPONENTS],
})
export class GithubModule {}
