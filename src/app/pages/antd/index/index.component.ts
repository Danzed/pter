import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-antd-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class AntdIndexComponent {
  componentsData = data.data
}
