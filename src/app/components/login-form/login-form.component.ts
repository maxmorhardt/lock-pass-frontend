import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          response => {
            // TODO handle api response
            this.isLoading = false
          },
          error => {
            this.isLoading = false;
            this.errorMessage = error.message;
          }
        );
    }
  }
}