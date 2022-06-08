import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglePayButtonComponent } from '@google-pay/button-angular';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { AdvanceEPlanComponent } from './component/e-pay/advance-eplan/advance-eplan.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PostAdComponent } from './component/post-ad/post-ad.component';
import { ProdDetailsComponent } from './component/prod-details/prod-details.component';
import { ProductsComponent } from './component/products/products.component';
import { SigninSignupComponent } from './component/signin-signup/signin-signup.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'payment', component: AdvanceEPlanComponent},
  {path:'gpay', component: GooglePayButtonComponent},
  { path: "sign-in", component: SigninSignupComponent },
  { path: "sign-up", component: SigninSignupComponent },
  { path: "about", component: AboutComponent },
  { path: "logout", component: LogoutComponent },
  { path: "postad", component: PostAdComponent },
  { path: "details/:prod-id", component: ProdDetailsComponent},
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
