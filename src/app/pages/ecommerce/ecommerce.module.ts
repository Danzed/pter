import { NgModule } from '@angular/core'
import { Form, FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { EcommerceRouterModule } from './ecommerce-routing.module'
import { CleanUIModule } from '../../components/CleanUIComponents/cleanui.module'
import { ChartistModule } from 'ng-chartist'

// ecommerce
import { EcommerceCartComponent } from 'src/app/pages/ecommerce/cart/cart.component'
import { EcommerceDashboardComponent } from 'src/app/pages/ecommerce/dashboard/dashboard.component'
import { EcommerceOrdersComponent } from 'src/app/pages/ecommerce/orders/orders.component'
import { EcommerceProductDetailsComponent } from 'src/app/pages/ecommerce/product-details/product-details.component'
import { EcommerceProductEditComponent } from 'src/app/pages/ecommerce/product-edit/product-edit.component'
import { EcommerceProductsCatalogComponent } from 'src/app/pages/ecommerce/products-catalog/products-catalog.component'
import { EcommerceProductsListComponent } from 'src/app/pages/ecommerce/products-list/products-list.component'

const COMPONENTS = [
  EcommerceCartComponent,
  EcommerceDashboardComponent,
  EcommerceOrdersComponent,
  EcommerceProductDetailsComponent,
  EcommerceProductEditComponent,
  EcommerceProductsCatalogComponent,
  EcommerceProductsListComponent,
]

@NgModule({
  imports: [SharedModule, EcommerceRouterModule, CleanUIModule, FormsModule, ChartistModule],
  declarations: [...COMPONENTS],
})
export class EcommerceModule {}
