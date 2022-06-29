import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './composants/navbar/top-navbar/top-navbar.component';
import { NavProfilComponent } from './composants/navbar/nav-profil/nav-profil.component';
import { LoginComponent } from './composants/user/login/login.component';
import { CreateUserComponent } from './composants/user/create-user/create-user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListeEncheresComponent } from './composants/encheres/liste-encheres/liste-encheres.component';
import { UpdateUserComponent } from './composants/user/update-user/update-user.component';
import { DetailEnchereComponent } from './componants/detail-enchere/detail-enchere.component';
import { CarteEnchereComponent } from './componants/carte-enchere/carte-enchere.component';
import { AjoutEnchereComponent } from './componants/ajout-enchere/ajout-enchere.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavProfilComponent,
    LoginComponent,
    CreateUserComponent,
    ListeEncheresComponent,
    UpdateUserComponent,
    DetailEnchereComponent,
    CarteEnchereComponent,
    AjoutEnchereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
