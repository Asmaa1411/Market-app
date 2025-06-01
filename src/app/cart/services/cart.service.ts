import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: { product: Product; quantity: number }[] = [];

  addToCart(product: Product) {
    const found = this.cart.find(item => item.product.id === product.id);
    if (found) {
      found.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }
}
