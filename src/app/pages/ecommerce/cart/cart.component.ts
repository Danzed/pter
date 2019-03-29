import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-ecommerce-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class EcommerceCartComponent {
  ordersTableData = data.ordersTableData
  invoicePrices = data.invoicePrices
  current = 0

  pre(): void {
    this.current -= 1
    // this.changeContent();
  }

  next(): void {
    this.current += 1
    // this.changeContent();
  }

  done(): void {
    console.log('done')
  }
}
