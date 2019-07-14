import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import toast from 'toastr';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '', password: ''
  };
  subscription: Subscription;
  errors: any = {};
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  checkClass(name: string) {
    return this.errors[name] ? 'error' : '';
  }

  onSubmit() {
    this.errors = {};
    const subscriber = {
      next: (data) => {
        toast.success('Login successful');
        this.router.navigate(['/']);
      },
      error: (error) => {
        if (error.status === 422) {
          error.error.errors.forEach((e) => {
            this.errors[e.param] = e.msg || e.message;
          });
        }
        toast.error(error.error.errors[0].msg || error.error.errors[0].message || 'An error occurred' );
      }
    };
    this.subscription = this.apiService.login(this.loginData).subscribe(subscriber);
  }
}
