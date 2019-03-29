import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-apps-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class AppsMailComponent implements OnInit {
  mailData = data.mailData
  mailCategories = data.mailData.mailCategories
  activeCategoryIndex = 0
  mail = data.mailData.inbox

  changeMailData(key) {
    this.mail = data.mailData[key]
  }

  ngOnInit() {}
}
