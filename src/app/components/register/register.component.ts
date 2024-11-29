import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)
  private readonly _FormBuilder = inject(FormBuilder)
  isLoading: boolean = false;
  msgError: string = "";

  registerForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]],
    rePassword: [null]
  },{validator: this.checkConfirmPassword})

  // RegisterForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
  //   rePassword: new FormControl(null)
  // }, this.checkConfirmPassword);

  registerSubmit(): void {
    if(this.registerForm.valid){
      this.isLoading = true;
      this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
        next: (res) => {
          if(res.message == 'success'){
            this._Router.navigate(['/login']);
          }
          this.isLoading = false;
        },
        error: (error:HttpErrorResponse) => {
          this.msgError = error.error.message;
          this.isLoading = false;
        }
      })
    }
    else {
      this.registerForm.setErrors({mismatch:true})
      this.registerForm.markAllAsTouched()
    }
  } 

  checkConfirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
    }
    else {
      return { mismatch: true }
    }
  }
}
