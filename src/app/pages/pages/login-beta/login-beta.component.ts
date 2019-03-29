import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-pages-login-beta',
  templateUrl: './login-beta.component.html',
  styleUrls: ['./login-beta.component.scss'],
})
export class PagesLoginBetaComponent implements OnInit {
  backgroundNumber = 1
  fullScreen = false
  validateForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({})
  }

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
