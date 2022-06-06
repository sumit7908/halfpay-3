import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceEPlanComponent } from './component/e-pay/advance-eplan/advance-eplan.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { CommonModule } from '@angular/common';
import {SigninSignupComponent} from './component/signin-signup/signin-signup.component'
import { AboutComponent } from './component/about/about.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PostAdComponent } from './component/post-ad/post-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    SigninSignupComponent,
    FilterPipe,
    AdvanceEPlanComponent,
    AboutComponent,
    LogoutComponent,
    PostAdComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
