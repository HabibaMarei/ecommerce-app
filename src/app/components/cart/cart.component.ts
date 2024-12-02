import { CurrencyPipe } from '@angular/common';
import { ICart } from './../../core/interfaces/icart';
import { CartService } from './../../core/services/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService)
  private readonly _ToastrService = inject(ToastrService)
  cartDetails: ICart  = { } as ICart

  ngOnInit(): void {
    this._CartService.getCartProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  removeProduct(id: string){
    this._CartService.removeProductFromCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success("Product removed successfully from your cart", "FreshCart")
        this.cartDetails = res.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
  updateQuantity(id: string, count: number){
    if(count > 0){
      this._CartService.updateProductQuantity(id, count).subscribe({
        next:(res)=>{
          console.log(res);
          this._ToastrService.success("Product quantity updated successfully", "FreshCart")
          this.cartDetails = res.data
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }

  clearCart(){
    this._CartService.clearProductCart().subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message == "success"){
          this.cartDetails = { } as ICart
          this._ToastrService.success("Cart is cleared successfully", "FreshCart")
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}

