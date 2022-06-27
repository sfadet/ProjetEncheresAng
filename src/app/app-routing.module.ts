import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./composants/user/login/login.component";
import {CreateUserComponent} from "./composants/user/create-user/create-user.component";

const routes: Routes = [
  {path: 'creerCompte', component: CreateUserComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
