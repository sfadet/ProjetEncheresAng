import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLogged: EventEmitter<boolean>  = new EventEmitter<boolean>();

  constructor() { }


  /**
   * Permet de savoir qu'un utilisateur est connecté
   */
  public connect(){
    this.isLogged.emit(true);
  }

  /**
   * Permet de se déconnecter
   */
  public disconnect(){
    this.isLogged.emit(false);
  }
}
