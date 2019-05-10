import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { retry, catchError, map } from 'rxjs/operators'
import { NzNotificationService } from 'ng-zorro-antd'
import { AuthService } from '../auth.service'
import { HttpBase } from '../http.base'

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpBase {

  constructor(private http: HttpClient,
    public notification: NzNotificationService,
    public authService: AuthService) {
    super(notification, authService)
  }

  public getMenu(): Observable<any> {
    return this.http.get(this.url_api + '/users/menu', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError.bind(this))
      )
  }
}
