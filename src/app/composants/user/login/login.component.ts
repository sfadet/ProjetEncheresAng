import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMsg: string = "";
  public isLogged: boolean = false;

  constructor(private loginSvc: UserService, private router: Router) {
    this.loginSvc.isLogged.subscribe(
      (data: boolean) => {
        if (data) {
          this.isLogged = data;
          router.navigate(['/']);
        }
      }
    )
  }

  ngOnInit(): void {
  }

  public log(data: any){
    if(data.login != "" && data.password != ""){
      let isConnected: boolean = this.loginSvc.getUserByLoginAndPassword(data.login, data.password);
      if(isConnected) {
        this.errorMsg = "";
      } else {
        this.errorMsg = "Impossible de se connecter. Login ou mot de passe invalide.";
      }
    } else {
      this.errorMsg = "Le login et le mot de passe doivent être renseignés";
    }
  }

}
