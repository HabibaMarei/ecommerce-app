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

export const routes: Routes = [
    {
        path: '', component: RouterAuthComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },  
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: '', component: RouterMainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, 
            { path: 'home', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'productdetails', component: ProductDetailsComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: 'brands', component: BrandsComponent },
            { path: 'cart', component: CartComponent }
        ]
    },
    { path: '**', component: NotfoundComponent }
];
