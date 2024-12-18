import { authLoginGuard } from './core/guards/auth-login.guard';
import { authLoggedGuard } from './core/guards/auth-logged.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterAuthComponent } from './layouts/router-auth/router-auth.component';
import { RouterMainComponent } from './layouts/router-main/router-main.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AllordersComponent } from './components/allorders/allorders.component';

export const routes: Routes = [
    {
        path: '', component: RouterAuthComponent, canActivate: [authLoggedGuard], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },  
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgetpassword', component: ForgetpasswordComponent },
        ]
    },
    {
        path: '', component: RouterMainComponent, canActivate: [authLoginGuard], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, 
            { path: 'home', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'productdetails/:id', component: ProductDetailsComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: 'brands', component: BrandsComponent },
            { path: 'cart', component: CartComponent },
            { path: 'wishlist', component: WishlistComponent },
            { path: 'orders/:id', component: OrdersComponent },
            { path: 'allorders', component: AllordersComponent }
        ]
    },
    { path: '**', component: NotfoundComponent }
];
