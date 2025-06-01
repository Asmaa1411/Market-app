import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../../services/landing.service';
import { Product } from '../../../models/product';
import { CartService } from '../../../cart/services/cart.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private landingService: LandingService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.landingService.getProducts().subscribe((products) => {
      const found = products.find(p => p.id === +id);
      if (found) this.product = found;
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
