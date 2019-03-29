import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class BlogPostComponent {
  articleData = data.articleData
  articlesCategories = data.articlesCategories
  latesArticlesData = data.latesArticlesData
  comments = data.comments
}
