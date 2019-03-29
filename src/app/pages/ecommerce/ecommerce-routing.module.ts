import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// ecommerce
import { EcommerceCartComponent } from 'src/app/pages/ecommerce/cart/cart.component'
import { EcommerceDashboardComponent } from 'src/app/pages/ecommerce/dashboard/dashboard.component'
import { EcommerceOrdersComponent } from 'src/app/pages/ecommerce/orders/orders.component'
import { EcommerceProductDetailsComponent } from 'src/app/pages/ecommerce/product-details/product-details.component'
import { EcommerceProductEditComponent } from 'src/app/pages/ecommerce/product-edit/product-edit.component'
import { EcommerceProductsCatalogComponent } from 'src/app/pages/ecommerce/products-catalog/products-catalog.component'
import { EcommerceProductsListComponent } from 'src/app/pages/ecommerce/products-list/products-list.component'

const routes: Routes = [
  {
    path: 'cart',
    component: EcommerceCartComponent,
    data: { title: 'Ecommerce Cart' },
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: EcommerceDashboardComponent,
    data: { title: 'Ecommerce Dashboard' },
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: EcommerceOrdersComponent,
    data: { title: 'Ecommerce Orders' },
    canActivate: [AuthGuard],
  },
  {
    path: 'product-details',
    component: EcommerceProductDetailsComponent,
    data: { title: 'Ecommerce Product Details' },
    canActivate: [AuthGuard],
  },
  {
    path: 'product-edit',
    component: EcommerceProductEditComponent,
    data: { title: 'Ecommerce Product Edit' },
    canActivate: [AuthGuard],
  },
  {
    path: 'products-catalog',
    component: EcommerceProductsCatalogComponent,
    data: { title: 'Ecommerce Products Catalog' },
    canActivate: [AuthGuard],
  },
  {
    path: 'products-list',
    component: EcommerceProductsListComponent,
    data: { title: 'Ecommerce Products List' },
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class EcommerceRouterModule {}
