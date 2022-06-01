import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglePayButtonComponent } from '@google-pay/button-angular';
import { CartComponent } from './component/cart/cart.component';
import { AdvanceEPlanComponent } from './component/e-pay/advance-eplan/advance-eplan.component';
import { ProductsComponent } from './component/products/products.component';
import { SigninSignupComponent } from './component/signin-signup/signin-signup.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'payment', component: AdvanceEPlanComponent},
  {path:'gpay', component: GooglePayButtonComponent},
  { path: "my-profile", component: UserProfileComponent },
  { path: "sign-in", component: SigninSignupComponent },
  { path: "sign-up", component: SigninSignupComponent },
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
