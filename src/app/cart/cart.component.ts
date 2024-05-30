import { Component } from '@angular/core';

import { Product } from '../products';
import { CartService, Order } from '../cart.service'
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../users';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart = this.cartService.getCart();
  user: User | undefined
  errorMessage = ''

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user
      if(user === undefined) {
        this.router.navigate(['/login']);
      }
    })
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.getOrders();
  }

  addToCart(product: Product) {
    this.cart = this.cartService.addToCart(product);
  }

  getOrders() {
    this.cart = this.cartService.getCart();
  }

  async deleteOrder(order: Order){
    await this.cartService.deleteOrder(order);
    this.getOrders();
  }

  async BuyCart() {
    if(this.user ? this.user.money >= this.cart.total : false) {

      await this.cartService.buyCart();
      this.getOrders();
      window.alert('The purchase was completed!');
      return;
    }

    this.errorMessage = 'NOT ENOUGH MONEY'
    return;

  }

}
