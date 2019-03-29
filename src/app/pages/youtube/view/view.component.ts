import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-youtube-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class YoutubeViewComponent {
  viewData = data.viewData
  upNext = data.upNext
}
