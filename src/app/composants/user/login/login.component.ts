import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Utilisateur} from "../../../modeles/Utilisateur";
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
      this.loginSvc.getUserByLoginAndPassword(data.login, data.password);
      this.errorMsg = "";
    } else {
      this.errorMsg = "Le login et le mot de passe doivent être renseignés";
    }
  }

  public disconnect(){
    this.loginSvc.disconnect();
  }

}
