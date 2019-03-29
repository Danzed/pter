import { Component } from '@angular/core'

@Component({
  selector: 'layout-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LayoutLoginComponent {
  backgroundNumber = 3
  backgroundEnabled = true

  changeBackground(): void {
    this.backgroundEnabled = true
    this.backgroundNumber === 5 ? (this.backgroundNumber = 1) : (this.backgroundNumber += 1)
  }

  toggleBackground(): void {
    this.backgroundEnabled = !this.backgroundEnabled
  }
}
