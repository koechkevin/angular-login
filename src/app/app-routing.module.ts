import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';

const routes: Routes = [{
  path: 'register', component: RegisterComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: '', component: AppComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
