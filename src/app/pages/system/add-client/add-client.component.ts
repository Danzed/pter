import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SystemService } from 'src/app/services/system/system.service'
import { NzNotificationService } from 'ng-zorro-antd'
import { RutValidator } from 'ng2-rut'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  providers: [SystemService]
})
export class AddClientComponent implements OnInit {

  registerAdminForm: FormGroup
  submitted = false

  admin: {
    user_uid: String,
    email: String,
    phone: String,
    name: String,
    last_name: String,
    nameChurch: String,
    address: String,
    bd: String
  }

  constructor(private formBuilder: FormBuilder,
    private systemService: SystemService,
    public notification: NzNotificationService,
    public rutValidator: RutValidator) { }

  ngOnInit() {
    this.registerAdminForm = this.formBuilder.group({
      name: ['', Validators.required],
      rut: ['', [Validators.required, this.rutValidator]],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      nameChurch: ['', Validators.required],
      address: ['', Validators.required],
      bd: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerAdminForm.controls }

  onSubmitAdmin() {
    this.submitted = true

    // stop here if form is invalid
    if (this.registerAdminForm.invalid) {
      return
    }

    this.admin = this.registerAdminForm.value

    this.systemService.createClient(this.admin).subscribe(resp => {
      if (resp.code === 0) {
        this.notification.success(
          'Registro Cliente',
          'El cliente se registro exitosamente.'
        )

        this.registerAdminForm.reset()
        this.submitted = false
      } else {
        this.notification.error(
          'Registro Cliente',
          'Error en el registro.'
        )
      }
    })
  }

}
