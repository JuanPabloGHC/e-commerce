import { Component } from '@angular/core';

import { products } from '../products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [...products];

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
      window.alert("You will be noticed when the product goes on sale");
    }

}
