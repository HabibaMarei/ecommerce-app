import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  userToken: any = localStorage.getItem("userToken")


  constructor(private _HttpClient: HttpClient) { }

  addProductToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${environment.baseURL}/api/v1/cart`,
      {
        "productId": id
      }
    )
  }

  getCartProducts(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/api/v1/cart`)
  }

  removeProductFromCart(id: string): Observable<any> {
    return this._HttpClient.delete(`${environment.baseURL}/api/v1/cart/${id}`)
  }

    updateProductQuantity(id: string, count: number): Observable<any>{
      return this._HttpClient.put(`${environment.baseURL}/api/v1/cart/${id}`,
        {
          "count": count
        }
      )
    }

    clearProductCart():Observable<any>{
      return this._HttpClient.delete(`${environment.baseURL}/api/v1/cart`)
    }
  }

