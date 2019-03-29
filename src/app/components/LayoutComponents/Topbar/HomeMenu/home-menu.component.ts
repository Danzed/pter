import { Component } from '@angular/core'

@Component({
  selector: 'cui-topbar-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class TopbarHomeMenuComponent {
  emailVerified = true
  constructor() {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    this.emailVerified = userInfo.emailVerified
  }
}
