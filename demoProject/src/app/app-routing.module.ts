import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';


const appRoutes : Routes = [
    // {path : '', redirectTo:'/cart'},
    // {path : '/cart' , component : CartComponent},
    {path : '', component : HeaderComponent, pathMatch:'full'},
    {path : 'auth', component : SigninComponent},
    {path : 'cart', component: CartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
  