import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';
  private cartSubject = new BehaviorSubject<any[]>(this.getCartFromStorage());
  cart$ = this.cartSubject.asObservable();

  private getCartFromStorage(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private updateCartStorage(cart: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  addToCart(product: Product): void {
    const cart = this.getCartFromStorage();
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    this.updateCartStorage(cart);
  }

  removeFromCart(id: number): void {
    const cart = this.getCartFromStorage().filter((item: any) => item.id !== id);
    this.updateCartStorage(cart);
  }

  updateQuantity(id: number, quantity: number): void {
    const cart = this.getCartFromStorage().map((item: any) =>
      item.id === id ? { ...item, quantity } : item
    );
    this.updateCartStorage(cart);
  }

  clearCart(): void {
    this.updateCartStorage([]);
  }
}
