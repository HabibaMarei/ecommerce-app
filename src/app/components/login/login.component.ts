import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  msgError:string = ""

  msgSuccess:string = ""

  private readonly _FormBuilder = inject(FormBuilder)

  isLoading: boolean = false

  private readonly _AuthService = inject(AuthService)

  private readonly _Router = inject(Router)

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]]
  })

  loginSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next:(res) => {
          if(res.message == 'success'){
            localStorage.setItem('userToken', res.token)
            this._AuthService.storeUserData()
            this._Router.navigate(['/home']);
          }
          this.isLoading = false;
        },
        error:(err: HttpErrorResponse) => {
          this.msgError = err.error.message
          this.isLoading = false;
        }
      })
    }
    else {
      this.loginForm.markAllAsTouched()
    }
  }
}
