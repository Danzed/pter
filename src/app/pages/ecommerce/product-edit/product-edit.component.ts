import { Component } from '@angular/core'

@Component({
  selector: 'app-ecommerce-product-edit',
  templateUrl: './product-edit.component.html',
})
export class EcommerceProductEditComponent {
  nodes = [
    {
      title: 'Furniture',
      key: '0',
      children: [
        {
          title: 'Tables',
          key: '0-0',
        },
        {
          title: 'Chairs',
          key: '0-1',
          children: [
            {
              title: 'Rounded Chairs',
              key: '0-1-0',
            },
            {
              title: 'Squared Chairs',
              key: '0-1-1',
            },
          ],
        },
      ],
    },
    {
      title: 'Electronics',
      key: '1',
      children: [
        {
          title: 'TV',
          key: '1-0',
        },
        {
          title: 'Consoles',
          key: '1-1',
          children: [
            {
              title: 'Playstation',
              key: '1-1-0',
            },
            {
              title: 'X-Box',
              key: '1-1-1',
            },
          ],
        },
      ],
    },
  ]
}
