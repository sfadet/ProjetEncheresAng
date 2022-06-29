import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./composants/user/login/login.component";
import {CreateUserComponent} from "./composants/user/create-user/create-user.component";
import {UpdateUserComponent} from "./composants/user/update-user/update-user.component";
import {LoginGuard} from "./guards/login.guard";
import {DetailArticlesComponent} from "./composants/articles/detail-article/detail-articles.component";
import {AjoutArticleComponent} from "./composants/articles/ajout-article/ajout-article.component";
import {ListeArticlesComponent} from "./composants/articles/liste-articles/liste-articles.component";

const routes: Routes = [
  {path: 'profil', component: UpdateUserComponent, canActivate: [LoginGuard]},
  {path: 'detailArticle', component: DetailArticlesComponent},
  {path: 'ajoutArticle', component: AjoutArticleComponent},
  {path: 'creerCompte', component: CreateUserComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: ListeArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
