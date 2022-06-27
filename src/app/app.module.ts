import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './composants/navbar/top-navbar/top-navbar.component';
import { NavProfilComponent } from './composants/navbar/nav-profil/nav-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
