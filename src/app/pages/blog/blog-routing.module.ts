import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// blog
import { BlogAddBlogPostComponent } from 'src/app/pages/blog/add-blog-post/add-blog-post.component'
import { BlogFeedComponent } from 'src/app/pages/blog/feed/feed.component'
import { BlogPostComponent } from 'src/app/pages/blog/post/post.component'

const routes: Routes = [
  {
    path: 'add-blog-post',
    component: BlogAddBlogPostComponent,
    data: { title: 'Blog Add Blog Post' },
    canActivate: [AuthGuard],
  },
  {
    path: 'feed',
    component: BlogFeedComponent,
    data: { title: 'Blog Feed' },
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: BlogPostComponent,
    data: { title: 'Blog Post' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class BlogRouterModule {}
