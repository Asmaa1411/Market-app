import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  private subscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number): void {
    if (quantity < 1) return;
    this.cartService.updateQuantity(id, quantity);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}