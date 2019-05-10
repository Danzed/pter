import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { NzNotificationService } from 'ng-zorro-antd'
import { AuthService } from '../auth.service'
import { HttpBase } from '../http.base'

@Injectable({
  providedIn: 'root'
})
export class SystemService extends HttpBase {

  constructor(private http: HttpClient,
    public notification: NzNotificationService,
    public authService: AuthService) {
    super(notification, authService)
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  public createClient(client): Observable<any> {
    client.phone = client.phone.indexOf('+56') >= 0 ? client.phone : '+56' + client.phone
    client.role = 'admin'
    return this.http.post(this.url_api + '/systems/client', client, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError.bind(this))
      )
  }

  public getClients(): Observable<any> {
    return this.http.get(this.url_api + '/systems/clients', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError.bind(this))
      )
  }

}
