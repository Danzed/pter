import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { MenuService } from 'src/app/services/menu.service'

@Component({
  selector: 'cui-topbar-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss'],
})
export class TopbarProjectManagementComponent {

  userInfo: any
  menuSystem

  constructor(public authService: AuthService,
    private menuService: MenuService) {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    this.menuService.getSystemMenuData().subscribe(menuData => (this.menuSystem = menuData))


  }
}
