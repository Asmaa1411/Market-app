import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LandingService } from '../../services/landing.service';
import { Product } from '../../../models/product';
import { CartService } from '../../../cart/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];
  private subscription!: Subscription;

  constructor(
    private landingService: LandingService,
    private router: Router,
    private cartService: CartService
  ) {}

 ngOnInit(): void {
    this.subscription = this.landingService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      }
    });
  }
    ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  goToProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

add(product: Product): void {
  this.cartService.addToCart(product);
}

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}












// takeUntil() + subject :

// private destroy$ = new Subject<void>();

// ngOnInit() {
//   this.service.getData().pipe(
//     takeUntil(this.destroy$)
//   ).subscribe(data => { ... });
// }

// ngOnDestroy() {
//   this.destroy$.next();
//   this.destroy$.complete();
// }
