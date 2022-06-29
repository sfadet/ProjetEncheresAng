import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

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

  constructor(private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  /**
   * Fonction appelée depuis le bouton 'Créer' de la page HTML
   * Elle utilise le service 'UserService' pour insérer l'utilisateur en BD
   * Elle redirige enfin l'utilisateur vers la page de login
   */
  public createUser(){
    let userJson= '{"pseudo":"'+this.pseudo+'", "nom":"'+this.nom+'", "prenom":"'+this.prenom+'", "email":"'+this.email+'", ';
    userJson+='"telephone":"'+this.tel+'", "rue":"'+this.rue+'", "codePostal":"'+this.cp+'", "ville":"'+this.ville+'", ';
    userJson+='"motDePasse":"'+this.passw+'", "credit":5, "administrateur":false, "achats":[],"ventes":[],"encheres":[]}';
    console.log(userJson);
    this.userSvc.addUser(userJson);
    this.router.navigate(['/login']);
  }

  /**
   * Fonction appelée depuis le bouton 'Annuler' de la page HTML
   * Elle redirige vers l'accueil
   */
  public cancel(){
    this.router.navigate(['/']);
  }

  /**
   * Permet de vérifier que le formulaire est complet
   * Ce qui active ou non le bouton 'Créer' sur la page
   */
  public verifForm(): boolean {
    return (
      this.verifPseudo() &&
      this.verifNom() &&
      this.verifPrenom() &&
      this.verifEmail() &&
      this.verifTel() &&
      this.verifRue() &&
      this.verifCP() &&
      this.verifVille() &&
      this.verifPassw() &&
      this.verifPasswVerif() &&
      this. verifSamePassword() &&
      this.verifVille() ? true : false);
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

  /** GESTION DU CODE POSTAL **/
  /**
   * Récupère la valeur de l'input 'cp' quand celui-ci est modifié
   */
  public changeCP(value: string) {
    this.cp = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifCP():boolean {
    return (this.cp == '' ? false :  true);
  }

  /** GESTION DE LA VILLE **/
  /**
   * Récupère la valeur de l'input 'ville' quand celui-ci est modifié
   */
  public changeVille(value: string) {
    this.ville = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifVille():boolean {
    return (this.ville == '' ? false :  true);
  }

  /** GESTION DU MOT DE PASSE **/
  /**
   * Récupère la valeur de l'input 'passw' quand celui-ci est modifié
   */
  public changePassw(value: string) {
    this.passw = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifPassw():boolean {
    return (this.passw == '' ? false :  true);
  }

  /** GESTION DU MOT DE PASSE DE VERIFICATION **/
  /**
   * Récupère la valeur de l'input 'passwVerif' quand celui-ci est modifié
   */
  public changePasswVerif(value: string) {
    this.passwVerif = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifPasswVerif():boolean {
    return (this.passwVerif == '' && this.verifSamePassword() ? false :  true);
  }

  public verifSamePassword(): boolean {
    return (this.passwVerif === this.passw ? true : false);
  }

}
