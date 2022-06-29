import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./composants/user/login/login.component";
import {CreateUserComponent} from "./composants/user/create-user/create-user.component";
import {ListeEncheresComponent} from "./composants/encheres/liste-encheres/liste-encheres.component";
import {UpdateUserComponent} from "./composants/user/update-user/update-user.component";
import {LoginGuard} from "./guards/login.guard";
import {AjoutEnchereComponent} from "./componants/ajout-enchere/ajout-enchere.component";
import {DetailEnchereComponent} from "./componants/detail-enchere/detail-enchere.component";

const routes: Routes = [
  {path: 'profil', component: UpdateUserComponent, canActivate: [LoginGuard]},
  {path: 'detailEnchere', component: DetailEnchereComponent},
  {path: 'ajoutEnchere', component: AjoutEnchereComponent},
  {path: 'creerCompte', component: CreateUserComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: ListeEncheresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
