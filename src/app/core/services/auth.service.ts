import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userTokenEncoded: string | null = null;
  userTokenDecoded: any = null;
  private readonly _Router = inject(Router);

  constructor(private httpClient: HttpClient) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.userTokenEncoded = localStorage.getItem('userToken');
      this.userTokenDecoded = this.userTokenEncoded ? jwtDecode(this.userTokenEncoded) : null;
    }
  }

  setRegisterForm(data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseURL}api/v1/auth/signup`, data);
  }

  setLoginForm(data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseURL}api/v1/auth/signin`, data);
  }

  storeUserData(): void {
    if (this.userTokenEncoded) {
      localStorage.setItem('userData', JSON.stringify(this.userTokenDecoded));
    }
  }

  logOut(){
    this.userTokenEncoded = null;
    this.userTokenDecoded = null;
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    this._Router.navigate(['/login']); 
  }
}
