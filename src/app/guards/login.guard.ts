import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  public isLogged: boolean = false;

  constructor(private loginSvc: UserService) {
    this.loginSvc.isLogged.subscribe(
      (data: boolean) => this.isLogged = data
    )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.isLogged;
  }

}
