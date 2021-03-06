import {EventEmitter, Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {Utilisateur} from "../modeles/Utilisateur";
import {firstValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Utilisateur = new Utilisateur(0,"","","","","","","","","", 0, false);
  public isLogged: EventEmitter<boolean>  = new EventEmitter<boolean>();

  constructor(private config: ConfigService, private http: HttpClient) { }

  public isLogged2: boolean = false;

  /**
   * Permet de savoir qu'un utilisateur est connecté
   */
  public connect(){
    this.isLogged.emit(true);
    this.isLogged2 = true;
  }

  /**
   * Permet de se déconnecter
   */
  public disconnect(){
    this.isLogged.emit(false);
    this.isLogged2 = false;
  }

  /**
   * Permet de récupérer l'utilisateur enregistré dans le service
   */
  public getLoggedUser(): Utilisateur {
    return this.user;
  }

  /**
   * Requete API GET
   * ---------------
   * Permet de récupérer un utilisateur en fonction de son 'login' et de son 'password'
   * Cette fonction est appelée depuis le formulaire de la page de connexion.
   * Si un utilisateur avec un identifiant différent de 0 est trouvé,
   * on indique que les infos de l'utilisateur ( this.user.emit(data) )
   * et on indique que quelqu'un est connecté ( this.connect() )
   * 'this.config.getApiPath()' va chercher l'url de l'API dans le service 'config'
   * @param login
   * @param password
   */
  public getUserByLoginAndPassword(login: string, password: string): boolean {
    let isGood: boolean = false
    firstValueFrom(this.http.get<Utilisateur>(this.config.getApiPath()+'/ws/users/'+login+'/'+password)).then(
      (data) => {
        if (data.noUtilisateur !=0){
          this.user = data;
          this.connect();
          isGood = true;
        }
      }
    )
    return isGood;
  }


  public addUser(addUser: string) {
    return this.http.post(this.config.getApiPath()+'/servlet/addUtilisateur', addUser).subscribe(
      data => console.log(data)
    )
  }

  public updateUser(updateUser: string) {
    return this.http.put(this.config.getApiPath()+'/servlet/UpdateUtilisateur', updateUser).subscribe(
      data => console.log(data)
    )
  }

  public getIsLogged(): boolean {
    return this.isLogged2;
  }

}

