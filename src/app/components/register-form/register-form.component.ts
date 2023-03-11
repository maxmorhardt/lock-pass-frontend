import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CustomValidators } from '../../util/custom-validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});
  public errorMessage: string = '';
  public isLoading: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', Validators.required) 
    }, 
    { validators: CustomValidators.valuesMatch('password', 'confirmPassword') });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.register(this.registerForm.value.username, this.registerForm.value.password)
        .subscribe(
          response => {
            this.isLoading = false;
          },
          error => {
            this.isLoading = false;
            this.errorMessage = error.message;
          }
        );
    }
  }
  
}