import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Utilisateur} from "../../../modeles/Utilisateur";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public user: Utilisateur = new Utilisateur(0,"","","","","","","","","", 0, false);
  public verifMDP: string = "";
  public newPassword: string = "";
  public newPassword2: string = "";

  constructor(private userService: UserService) {
    this.user = this.userService.getLoggedUser();
  }

  ngOnInit(): void {
  }

  /**
   * Fonction appelée depuis le bouton 'Enregistrer' de la page HTML
   * Elle utilise le service 'UserService' pour modifier l'utilisateur en BD
   * Elle redirige enfin l'utilisateur vers la page de login
   */
  public updateUser(){
    let userJson= '{"noUtilisateur":'+this.user.noUtilisateur+', "pseudo":"'+this.user.pseudo+'", "nom":"'+this.user.nom+'", "prenom":"'+this.user.prenom+'", "email":"'+this.user.email+'", ';
    userJson+='"telephone":"'+this.user.telephone+'", "rue":"'+this.user.rue+'", "codePostal":"'+this.user.codePostal+'", "ville":"'+this.user.ville+'"';
    userJson+=', "credit":5, "administrateur":false, "achats":[],"ventes":[],"encheres":[], ';
    if(this.newPassword != '' && this.newPassword == this.newPassword2){
      userJson+='"motDePasse":"'+this.newPassword+'"}';
    } else {
      userJson+='"motDePasse":"'+this.user.motDePasse+'"}';
    }
    // console.log(userJson);
    this.userService.updateUser(userJson);
    // this.router.navigate(['/login']);
  }

  /**
   * Permet de vérifier que le formulaire est complet
   * Ce qui active ou non le bouton 'Enregistrer' sur la page
   */
  public verifForm(): boolean {
    return (
      this.verifPseudo() &&
      this.verifNom() &&
      this.verifPrenom() &&
      this.verifEmail() &&
      this.verifTel() &&
      this.verifRue() &&
      this.verifCp() &&
      this.verifVille() &&
      this.verifVerifMDP() &&
      this.verifNewPassword());
  }

  /** GESTION DU PSEUDO **/
  /**
   * Récupère la valeur de l'input 'pseudo' quand celui-ci est modifié
   */
  public changePseudo(value: string) {
    this.user.pseudo = value;
  }
  /**
   * Vérifie que le 'pseudo' n'est pas null
   */
  public verifPseudo():boolean {
    return (this.user.pseudo != '');
  }

  /** GESTION DU NOM **/
  /**
   * Récupère la valeur de l'input 'nom' quand celui-ci est modifié
   */
  public changeNom(value: string) {
    this.user.nom = value;
  }
  /**
   * Vérifie que le 'nom' n'est pas null
   */
  public verifNom():boolean {
    return (this.user.nom != '');
  }

  /** GESTION DU PRENOM **/
  /**
   * Récupère la valeur de l'input 'prenom' quand celui-ci est modifié
   */
  public changePrenom(value: string) {
    this.user.prenom = value;
  }
  /**
   * Vérifie que le 'prenom' n'est pas null
   */
  public verifPrenom():boolean {
    return (this.user.prenom != '');
  }

  /** GESTION DU EMAIL **/
  /**
   * Récupère la valeur de l'input 'email' quand celui-ci est modifié
   */
  public changeEmail(value: string) {
    this.user.email = value;
  }
  /**
   * Vérifie que le 'email' n'est pas null
   */
  public verifEmail():boolean {
    return (this.user.email != '');
  }

  /** GESTION DU TELEPHONE **/
  /**
   * Récupère la valeur de l'input 'tel' quand celui-ci est modifié
   */
  public changeTel(value: string) {
    this.user.telephone = value;
  }
  /**
   * Vérifie que le 'tel' n'est pas null
   */
  public verifTel():boolean {
    return (this.user.telephone != '');
  }

  /** GESTION DE LA RUE **/
  /**
   * Récupère la valeur de l'input 'rue' quand celui-ci est modifié
   */
  public changeRue(value: string) {
    this.user.rue = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifRue():boolean {
    return (this.user.rue != '');
  }

  /** GESTION DU CODE POSTAL **/
  /**
   * Récupère la valeur de l'input 'cp' quand celui-ci est modifié
   */
  public changeCp(value: string) {
    this.user.codePostal = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifCp():boolean {
    return (this.user.codePostal != '');
  }

  /** GESTION DE LA VILLE **/
  /**
   * Récupère la valeur de l'input 'ville' quand celui-ci est modifié
   */
  public changeVille(value: string) {
    this.user.ville = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifVille():boolean {
    return (this.user.ville != '');
  }

  /** GESTION DE LA SAISIE DU MOT DE PASSE ACTUEL **/
  /**
   * Récupère la valeur de l'input 'verifMDP' quand celui-ci est modifié
   */
  public changeVerifMDP(value: string) {
    this.verifMDP = value;
  }
  /**
   * Vérifie que le 'rue' n'est pas null
   */
  public verifVerifMDP():boolean {
    return (this.verifMDP != '' && this.verifMDP == this.user.motDePasse);
  }

  /** GESTION DE LA SAISIE DU NOUVEAU MOT DE PASSE **/
  /**
   * Récupère la valeur de l'input 'newPassword' quand celui-ci est modifié
   */
  public changeNewPassword(value: string) {
    this.newPassword = value;
  }
  /**
   * Récupère la valeur de l'input 'newPassword2' quand celui-ci est modifié
   */
  public changeNewPassword2(value: string) {
    this.newPassword2 = value;
  }
  /**
   * Vérifie que le nouveau mot de passe est identique dans les deux champs
   */
  public verifNewPassword():boolean {
    let retour: boolean = true;

    if (this.newPassword != '' && this.newPassword != this.newPassword2) {
      retour = false;
    }
    return retour;
  }
}
