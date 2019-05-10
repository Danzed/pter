import { Component, OnInit } from '@angular/core'
import { SystemService } from 'src/app/services/system/system.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private _systemService: SystemService) { }

  ngOnInit() {
    this._systemService.getClients().subscribe(res => {
      console.log(res)
    })
  }

}
