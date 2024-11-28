import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient)
  constructor() { }
  setRegisterForm(data:object){
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data)
  }
}
