import { ToastrService } from 'ngx-toastr';
import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { Iwishlist } from '../../core/interfaces/iwishlist';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  wishList: Iwishlist[] = [];
  private readonly WishlistService = inject(WishlistService)
  private readonly _ToastrService = inject(ToastrService)
  
  ngOnInit(): void {
    this.WishlistService.getLoggedUserWishlist().subscribe({
      next: (res) => {
        this.wishList = res.data
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  deleteFromWishList(productId: string){
    this.WishlistService.removeProductFromWishlist(productId).subscribe({
      next:(res)=>{
        console.log(res);     
        this._ToastrService.success(res.message, "FreshCart")
        this.WishlistService.getLoggedUserWishlist().subscribe({
          next: (res) => {
            this.wishList = res.data
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          }
        })
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
