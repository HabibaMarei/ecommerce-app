import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private readonly _AuthService = inject(AuthService)
  isLoading: boolean = false;
  msgError: string = "";
  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
    password: new FormControl(null),
    rePassword: new FormControl(null, [Validators.required])
  }, this.checkConfirmPassword);

  registerSubmit(): void {
    if(this.RegisterForm.valid){
      this.isLoading = true;
      this._AuthService.setRegisterForm(this.RegisterForm.value).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          console.log(res);
          
        },
        error: (error:HttpErrorResponse) => {
          this.isLoading = false;
          this.msgError = error.error.message;
        }
      })
    }
    else {
      this.RegisterForm.setErrors({mismatch:true})
      this.RegisterForm.markAllAsTouched()
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
