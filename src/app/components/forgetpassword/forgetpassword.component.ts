import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  private readonly _AuthService = inject(AuthService)
  errMsg: string = ""
  currentForm: number = 1
  private readonly _Router = inject(Router)

  verifyEmailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6}$/)])
  })

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9]{5,}$/)])
  })


  verifyEmailSubmit(){
    if(this.verifyEmailForm.valid){
      this._AuthService.setEmailVerification(this.verifyEmailForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          if(res.statusMsg === 'success'){
            this.currentForm = 2;
          }
          
        },
        error: (err: HttpErrorResponse)=>{
          console.log(err);
          this.errMsg = err.error.message;
        }
      })
    }
  }

  verifyCodeSubmit(){
    if(this.verifyCodeForm.valid){
      this._AuthService.setCodeVerification(this.verifyCodeForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          if(res.status === 'Success'){
            this.currentForm = 3;
          }
          
        },
        error: (err: HttpErrorResponse)=>{
          console.log(err);
          this.errMsg = err.error.message;
        }
      })
    }    
  }

  resetPasswordSubmit(){
    if(this.resetPasswordForm.valid){
      this._AuthService.setResetPassword(this.resetPasswordForm.value).subscribe({
        next: (res)=>{
            localStorage.setItem('userToken', res.token)
            const userToken = localStorage.getItem('userToken');
            if (userToken) {
              const userData = jwtDecode(userToken);
              localStorage.setItem('userData', JSON.stringify(userData));
            } else {
              console.error('No user token found in localStorage.');
            }
            this._Router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse)=>{
          console.log(err);
          this.errMsg = err.error.message;
        }
      })
    }  
  }
}
