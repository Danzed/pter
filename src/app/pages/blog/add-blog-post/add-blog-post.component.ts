import { Component } from '@angular/core'

@Component({
  selector: 'app-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss'],
})
export class BlogAddBlogPostComponent {
  listOfOption = [
    {
      label: 'Travel',
      value: 'travel',
    },
    {
      label: 'Lifestyle',
      value: 'lifestyle',
    },
  ]
}
