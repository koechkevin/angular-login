import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import toast from 'toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerData = {
    email: '', password: '', phone: 0, name: ''
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
        toast.success('Successfully created');
        this.router.navigate(['/login']);
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
    this.subscription = this.apiService.register(this.registerData).subscribe(subscriber);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
