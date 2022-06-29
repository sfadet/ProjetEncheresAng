import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public pseudo: string = "";
  public nom: string = "";
  public prenom: string = "";
  public email: string = "";
  public tel: string = "";
  public rue: string = "";
  public cp: string = "";
  public ville: string = "";
  public passw: string = "";
  public passwVerif: string = "";

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
  }

  public createUser(){
    this.userSvc.addUser()
      .subscribe(data => {
        console.log(data)
      })
  }

  /**
   * Permet de vérifier que le formulaire est complet
   * Ce qui active ou non le bouton 'Créer' sur la page
   */
  public verifForm(): boolean {
    return (this.verifPseudo() ? true : false);
  }

  /** GESTION DU PSEUDO **/
  /**
   * Récupère la valeur de l'input 'pseudo' quand celui-ci est modifié
   */
  public changePseudo(value: string) {
    this.pseudo = value;
  }
  /**
   * Vérifie que le 'pseudo' n'est pas null
   */
  public verifPseudo():boolean {
    return (this.pseudo == '' ? false :  true);
  }

  /** GESTION DU NOM **/
  /**
   * Récupère la valeur de l'input 'nom' quand celui-ci est modifié
   */
  public changeNom(value: string) {
    this.nom = value;
  }
  /**
   * Vérifie que le 'nom' n'est pas null
   */
  public verifNom():boolean {
    return (this.nom == '' ? false :  true);
  }

  /** GESTION DU PRENOM **/
  /**
   * Récupère la valeur de l'input 'prenom' quand celui-ci est modifié
   */
  public changePrenom(value: string) {
    this.prenom = value;
  }
  /**
   * Vérifie que le 'prenom' n'est pas null
   */
  public verifPrenom():boolean {
    return (this.prenom == '' ? false :  true);
  }

  /** GESTION DU EMAIL **/
  /**
   * Récupère la valeur de l'input 'email' quand celui-ci est modifié
   */
  public changeEmail(value: string) {
    this.email = value;
  }
  /**
   * Vérifie que le 'email' n'est pas null
   */
  public verifEmail():boolean {
    return (this.email == '' ? false :  true);
  }

  /** GESTION DU TELEPHONE **/
  /**
   * Récupère la valeur de l'input 'tel' quand celui-ci est modifié
   */
  public changeTel(value: string) {
    this.tel = value;
  }
  /**
   * Vérifie que le 'tel' n'est pas null
   */
  public verifTel():boolean {
    return (this.tel == '' ? false :  true);
  }

  /** GESTION DE LA RUE **/
  /**
   * Récupère la valeur de l'input 'rue' quand celui-ci est modifié
   */
  public changeRue(value: string) {
    this.rue = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifRue():boolean {
    return (this.rue == '' ? false :  true);
  }


}
