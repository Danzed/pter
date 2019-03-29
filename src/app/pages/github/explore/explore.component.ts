import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-github-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class GithubExploreComponent implements OnInit {
  projectData = data.projectData

  tabs = [
    {
      name: 'Home',
      icon: 'mr-2 fa fa-home',
    },
    {
      name: 'Discussion',
      icon: 'mr-2 fa fa-comments',
    },
    {
      name: 'Profile',
      icon: 'mr-2 fa fa-user',
    },
    {
      name: 'Messages',
      icon: 'mr-2 fa fa-envelope',
    },
    {
      name: 'Settings',
      icon: 'mr-2 fa fa-cog',
    },
  ]

  ngOnInit(): void {}
}
