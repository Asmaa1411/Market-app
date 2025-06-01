import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LandingService } from '../../services/landing.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private landingService: LandingService, private router: Router) {}
  ngOnInit(): void {
    this.landingService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      }
    });
  }

  goToProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  goToCart() {
  this.router.navigate(['/cart']);
}
}
