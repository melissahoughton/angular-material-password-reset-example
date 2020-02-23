import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordFormComponent } from './password-form/password-form.component';


const routes: Routes = [
  { path: '', component: PasswordFormComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
