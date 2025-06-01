import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Standalone Components
import { LandingPageComponent } from './products/components/landing-page/landing-page.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './cart/components/cart/cart.component';

// Services
import { LandingService } from './products/services/landing.service';

import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageComponent,
    ProductDetailsComponent,
    CartComponent,
    NgbModule,
    SharedModule,
    PageNotFoundComponent
  ],
  providers: [
    LandingService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
