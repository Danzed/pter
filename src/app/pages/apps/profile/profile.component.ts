import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-apps-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class AppsProfileComponent {
  name = data.name
  nickname = data.nickname
  photo = data.photo
  background = data.background
  post = data.post
  postsCount = data.postsCount
  followersCount = data.followersCount
  lastActivity = data.lastActivity
  status = data.status
  skills = data.skills
  coursesEnd = data.coursesEnd
  adress = data.adress
  profSkills = data.profSkills
  lastCompanies = data.lastCompanies
  personal = data.personal
  posts = data.posts

  formLayout = 'vertical'
}
