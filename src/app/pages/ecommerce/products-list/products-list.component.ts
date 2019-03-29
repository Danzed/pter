import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-ecommerce-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class EcommerceProductsListComponent {
  productsData = data.data
  displayProductsData = [...this.productsData]
  sortName = null
  sortValue = null
  listOfSearchName = []
  searchAddress: string

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key
    this.sortValue = sort.value
    this.search()
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName
    this.searchAddress = searchAddress
    this.search()
  }

  search(): void {
    // /** filter data **/
    const filterFunc = item =>
      (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length
        ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1)
        : true)
    const data = this.productsData.filter(item => filterFunc(item))
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.displayProductsData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName] > b[this.sortName]
            ? 1
            : -1
          : b[this.sortName] > a[this.sortName]
          ? 1
          : -1,
      )
    } else {
      this.displayProductsData = data
    }
  }
}
