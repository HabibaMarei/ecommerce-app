import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient : HttpClient) { }

  getLoggedUserWishlist():Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/api/v1/wishlist`)
  }

  addProductToWishlist(productId: string):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/api/v1/wishlist`,{
      "productId": productId
    })
  }

  removeProductFromWishlist(productId: string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseURL}/api/v1/wishlist/${productId}`)
  }
}
