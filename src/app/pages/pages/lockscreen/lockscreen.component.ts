import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pages-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss'],
})
export class PagesLockscreenComponent implements OnInit {
  backgroundNumber = 1
  fullScreen = false
  ngOnInit(): void {}

  changeBackground(): void {
    if (this.backgroundNumber === 5) {
      this.backgroundNumber = 1
    } else {
      this.backgroundNumber += 1
    }
  }

  changeScreen(): void {
    this.fullScreen = !this.fullScreen
  }
}
