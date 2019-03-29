import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-blog-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class BlogFeedComponent {
  articlesData = data.articlesData
  articlesCategories = data.articlesCategories
  latesArticlesData = data.latesArticlesData
}
