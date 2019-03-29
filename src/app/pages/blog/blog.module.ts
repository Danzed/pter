import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { BlogRouterModule } from './blog-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'
import { QuillModule } from 'ngx-quill'

// blog
import { BlogAddBlogPostComponent } from 'src/app/pages/blog/add-blog-post/add-blog-post.component'
import { BlogFeedComponent } from 'src/app/pages/blog/feed/feed.component'
import { BlogPostComponent } from 'src/app/pages/blog/post/post.component'

const COMPONENTS = [BlogAddBlogPostComponent, BlogFeedComponent, BlogPostComponent]

@NgModule({
  imports: [SharedModule, BlogRouterModule, CleanUIModule, QuillModule],
  declarations: [...COMPONENTS],
})
export class BlogModule {}
