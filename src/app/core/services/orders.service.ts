import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient: HttpClient) { }
  createCreditOrder(id: string, shippingAddress: object):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        "shippingAddress": shippingAddress
      }
    )
  }

  createCashOrder(id: string, shippingAddress: object):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/api/v1/orders/${id}`,
      {
        "shippingAddress": shippingAddress
      }
    )
  }

  getAllOrders(id: string | null):Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/api/v1/orders/user/${id}`);
  }
}
