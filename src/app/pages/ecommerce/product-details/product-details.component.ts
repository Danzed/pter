import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-ecommerce-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class EcommerceProductDetailsComponent implements OnInit {
  images = data.images
  sku = data.sku
  name = data.name
  rate = data.rate
  price = data.price
  oldPrice = data.oldPrice
  shortDescr = data.shortDescr
  description = data.description
  properties = data.properties
  colorValue = 'Red'

  ngOnInit() {}
}
