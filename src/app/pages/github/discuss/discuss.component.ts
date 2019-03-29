import { Component } from '@angular/core'

declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-github-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss'],
})
export class GithubDiscussComponent {
  discuss = data.discuss
  selectedIndex = 1
  tabs = [
    {
      name: 'Home',
      icon: 'fa fa-home',
    },
    {
      name: 'Discussion',
      icon: 'fa fa-comments',
    },
    {
      name: 'Profile',
      icon: 'fa fa-user',
    },
    {
      name: 'Messages',
      icon: 'fa fa-envelope',
    },
    {
      name: 'Settings',
      icon: 'fa fa-cog',
    },
  ]
}
