import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMsg: string = "";

  constructor(private loginSvc: UserService) { }

  ngOnInit(): void {
  }

  public log(data: any){
    if(data.login != "" && data.password != ""){
      this.loginSvc.connect()
      this.errorMsg = "";
    } else {
      this.errorMsg = "Le login et le mot de passe doivent être renseignés";
    }
  }

  public disconnect(){
    this.loginSvc.disconnect();
  }

}
