import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { NzNotificationService } from 'ng-zorro-antd'
import { AuthService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private url_api = 'https://us-central1-pter-41e59.cloudfunctions.net/webApi'

  constructor(private http: HttpClient,
    private notification: NzNotificationService,
    public authService: AuthService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).stsTokenManager.accessToken
    })
  }

  public createClient(client): Observable<any> {
    client.phone = client.phone.indexOf('+56') >= 0 ? client.phone : '+56' + client.phone
    client.role = 'admin'
    return this.http.post(this.url_api + '/systems/client', client, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError.bind(this))
      )
  }

  handleError(error) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    if (error.status === 403) {
      this.authService.SignOut()
      this.notification.error(
        'Autorización',
        'Error de autorización.'
      )
    } else if (error.status === 500) {
      if (error.error.error) {
        switch (error.error.error.code) {
          case 'auth/email-already-exists':
            this.notification.error('Error de servidor', 'El email ya esta registrado.')
            break
          case 'auth/phone-number-already-exists':
            this.notification.error('Error de servidor', 'El teléfono ya esta registrado.')
            break
        }
      } else {
        this.notification.error('Error de servidor', 'Ha ocurrido un error no controlado. Pongase en contacto con el administrador.')
      }

    }
    return throwError(errorMessage)
  }

}
