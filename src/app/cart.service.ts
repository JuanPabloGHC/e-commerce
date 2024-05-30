import { Injectable } from '@angular/core';
import { Product } from './products';
import { AuthService } from './auth.service';

export interface Order {
  id: number,
  product: Product,
  cantidad: number,
  subTotal: number
}

export interface Cart {
  orders: Order[],
  total: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: Order[] = []
  cart: Cart = {
    orders: [],
    total: 0
  }
  items: Product[] = []

  constructor(
    private userService: AuthService
  ) { }

  addToCart(_product: Product): Cart {
    for(var or of this.orders) {
      if(or.product.id == _product.id){
        or.cantidad += 1;
        or.subTotal = or.product.price * or.cantidad;
        this.updateCart();
        return this.cart;
      }
    }
    const tempOrder: Order =  {
      id: this.orders.length,
      product: _product,
      cantidad: 1,
      subTotal: _product.price
    }

    this.orders.push(tempOrder);
    this.updateCart();
    return this.cart;
  }

  removeFromCart(_product: Product) {
    for(var or of this.orders) {
      if(or.product.id == _product.id){
        
        or.cantidad -= 1;
        or.subTotal = or.product.price * or.cantidad;

        if(or.cantidad == 0) {
          this.deleteOrder(or);
        }

      }
    }
    this.updateCart()
  }

  deleteOrder(order: Order) {
    const temp = this.orders.filter((ord) => {
      return ord.id !== order.id
    })
    this.orders = temp;

    this.updateCart();
    return this.cart;
  }

  updateCart() {

    this.cart.orders = this.orders;
    
    let tempTotal = 0;

    for(var or of this.orders) {
      tempTotal += or.subTotal;
    }

    this.cart.total = tempTotal;
  }

  getCart() {
    return this.cart;
  }

  buyCart() {
    this.userService.updateUser(this.cart);
    this.orders = [];
    this.updateCart();
  }

}
