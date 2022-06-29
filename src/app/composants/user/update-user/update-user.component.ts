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

  constructor(private userService: UserService) {
    this.user = this.userService.getLoggedUser();
  }

  ngOnInit(): void {
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
    this.user.pseudo = value;
  }
  /**
   * Vérifie que le 'pseudo' n'est pas null
   */
  public verifPseudo():boolean {
    return (this.user.pseudo == '' ? false :  true);
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
    return (this.user.nom == '' ? false :  true);
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
    return (this.user.prenom == '' ? false :  true);
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
    return (this.user.email == '' ? false :  true);
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
    return (this.user.telephone == '' ? false :  true);
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
    return (this.user.rue == '' ? false :  true);
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
    return (this.user.codePostal == '' ? false :  true);
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
    return (this.user.ville == '' ? false :  true);
  }
}
