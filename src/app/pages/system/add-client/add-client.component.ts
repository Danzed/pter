import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SystemService } from 'src/app/services/system/system.service'

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
    last_name: String
  }
  church: {
    name: String,
    address: String,
    bd: String
  }

  constructor(private formBuilder: FormBuilder,
    private systemService: SystemService) { }

  ngOnInit() {
    this.registerAdminForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]]
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
      console.log(resp)
    })

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.admin))
  }

}
