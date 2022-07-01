import {Retrait} from "./Retrait";
import {Categorie} from "./Categorie";
import {DateTime} from "./DateTime";
import {Enchere} from "./Enchere";

export class Article {
  private _noArticle: number;
  private _nomArticle: string;
  private _description: string;
  private _dateDebutEncheres: DateTime;
  private _dateFinEncheres: DateTime;
  private _miseAPrix: number;
  private _prixVente: number;
  private _lieuRetrait: Retrait;
  private _categorie: Categorie;
  private _noUtilisateurVendeur: number;
  private _pseudoVendeur: string;
  private _encheres: Enchere[] = [];

  constructor(noArticle: number, nomArticle: string, description: string, dateDebutEncheres: DateTime, dateFinEncheres: DateTime, miseAPrix: number, prixVente: number, lieuRetrait: Retrait, categorie: Categorie, noUtilisateurVendeur: number, pseudoVendeur: string, encheres: Enchere[]) {
    this._noArticle = noArticle;
    this._nomArticle = nomArticle;
    this._description = description;
    this._dateDebutEncheres = dateDebutEncheres;
    this._dateFinEncheres = dateFinEncheres;
    this._miseAPrix = miseAPrix;
    this._prixVente = prixVente;
    this._lieuRetrait = lieuRetrait;
    this._categorie = categorie;
    this._noUtilisateurVendeur = noUtilisateurVendeur;
    this._pseudoVendeur = pseudoVendeur;
    this._encheres = encheres;
  }

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

  get pseudoVendeur(): string {
    return this._pseudoVendeur;
  }

  set pseudoVendeur(value: string) {
    this._pseudoVendeur = value;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get lieuRetrait(): Retrait {
    return this._lieuRetrait;
  }

  set lieuRetrait(value: Retrait) {
    this._lieuRetrait = value;
  }

  get dateDebutEncheres(): DateTime {
    return this._dateDebutEncheres;
  }

  set dateDebutEncheres(value: DateTime) {
    this._dateDebutEncheres = value;
  }

  get dateFinEncheres(): DateTime {
    return this._dateFinEncheres;
  }

  set dateFinEncheres(value: DateTime) {
    this._dateFinEncheres = value;
  }

  get encheres(): Enchere[] {
    return this._encheres;
  }

  set encheres(value: Enchere[]) {
    this._encheres = value;
  }
}
