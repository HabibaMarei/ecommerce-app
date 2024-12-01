import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _ProductsService = inject(ProductsService)
  productList: IProduct[] = []
  ProductsSubscription: Subscription = new Subscription()
  ngOnInit(): void {
    this.ProductsSubscription = this._ProductsService.getAllProducts().subscribe({
      next: (res)=>{
        console.log(res.data);
        this.productList = res.data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  ngOnDestroy(): void {
    this.ProductsSubscription.unsubscribe();
    console.log("unsubscribe");   
  }
}
