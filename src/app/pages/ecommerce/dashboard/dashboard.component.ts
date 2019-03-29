import { Component } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
declare var require: any
const data: any = require('./data.json')
const dataCharts: any = require('./dataCharts.json')

@Component({
  selector: 'app-ecommerce-dashboard',
  templateUrl: './dashboard.component.html',
})
export class EcommerceDashboardComponent {
  ordersGraph = dataCharts.ordersGraph
  amountGraph = dataCharts.amountGraph
  ordersInfo = data.ordersInfo
  amountInfo = data.amountInfo
  bestsellersData = data.bestsellersData
  mostViewedData = data.mostViewedData
  newCustomersData = data.newCustomersData
  topCustomersData = data.topCustomersData
  lastOrdersData = data.lastOrdersData
  lastSearchData = data.lastSearchData
  topSearchData = data.topSearchData

  chartOptions = {
    fullWidth: true,
    showArea: false,
    chartPadding: {
      right: 30,
      left: 0,
    },
    plugins: [
      ChartistTooltip({
        appendToBody: true,
      }),
    ],
  }

  ordersSelectValue = 'lastDay'
}
