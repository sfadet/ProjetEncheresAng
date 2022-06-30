import {Retrait} from "./Retrait";
import {Categorie} from "./Categorie";

export class Article {
  private _noArticle: number;
  private _nomArticle: string;
  private _description: string;
  private _miseAPrix: number;
  private _prixVente: number;
  // private _lieuRetrait: Retrait;
  // private _categorie: Categorie;
  private _noUtilisateurVendeur: number;


  get noArticle(): number {
    return this._noArticle;
  }

  set noArticle(value: number) {
    this._noArticle = value;
  }

  get nomArticle(): string {
    return this._nomArticle;
  }

  set nomArticle(value: string) {
    this._nomArticle = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get miseAPrix(): number {
    return this._miseAPrix;
  }

  set miseAPrix(value: number) {
    this._miseAPrix = value;
  }

  get prixVente(): number {
    return this._prixVente;
  }

  set prixVente(value: number) {
    this._prixVente = value;
  }

  get noUtilisateurVendeur(): number {
    return this._noUtilisateurVendeur;
  }

  set noUtilisateurVendeur(value: number) {
    this._noUtilisateurVendeur = value;
  }

  constructor(noArticle: number, nomArticle: string, description: string, miseAPrix: number, prixVente: number, noUtilisateurVendeur: number) {
    this._noArticle = noArticle;
    this._nomArticle = nomArticle;
    this._description = description;
    this._miseAPrix = miseAPrix;
    this._prixVente = prixVente;
    this._noUtilisateurVendeur = noUtilisateurVendeur;
  }
}
