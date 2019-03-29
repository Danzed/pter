import { HttpHeaders, HttpClient } from '@angular/common/http'
import { NzNotificationService } from 'ng-zorro-antd'
import { AuthService } from './auth.service'
import { throwError } from 'rxjs'

export class HttpBase {

    public url_api = 'https://us-central1-pter-41e59.cloudfunctions.net/webApi'

    constructor(public notification: NzNotificationService,
        public authService: AuthService) { }

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    // Http Options
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).stsTokenManager.accessToken
        })
    }

    public handleError(error) {
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
                this.notification.error('Error de servidor',
                    'Ha ocurrido un error no controlado. Pongase en contacto con el administrador.')
            }

        }
        return throwError(errorMessage)
    }
}
