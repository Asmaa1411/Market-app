import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './products/components/landing-page/landing-page.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ 
  { path: 'landing', component: LandingPageComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
