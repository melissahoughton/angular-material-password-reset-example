import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordFormComponent } from './password-form/password-form.component';


const routes: Routes = [
  { path: 'password-reset', component: PasswordFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
