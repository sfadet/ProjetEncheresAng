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

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavProfilComponent,
    LoginComponent,
    CreateUserComponent
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
