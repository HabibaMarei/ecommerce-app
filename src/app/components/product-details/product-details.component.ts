import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  private readonly _ProductsService = inject(ProductsService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  product: IProduct = { } as IProduct
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        let productId = p.get('id');
        this._ProductsService.getProduct(productId).subscribe({
          next: (res) => {
            console.log(res.data);
            this.product = res.data;
            
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

}
