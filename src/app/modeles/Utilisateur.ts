export class Utilisateur {
  private _noUtilisateur: number;
  private _pseudo: string;
  private _nom: string;
  private _prenom: string;
  private _email: string;
  private _telephone: string;
  private _rue: string;
  private _codePostal: string;
  private _ville: string;
  private _motDePasse: string;
  private _credit: number;
  private _administrateur: boolean;

  constructor(noUtilisateur: number, pseudo: string, nom: string, prenom: string, email: string, telephone: string, rue: string, codePostal: string, ville: string, motDePasse: string, credit: number, administrateur: boolean) {
    this._noUtilisateur = noUtilisateur;
    this._pseudo = pseudo;
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
    this._telephone = telephone;
    this._rue = rue;
    this._codePostal = codePostal;
    this._ville = ville;
    this._motDePasse = motDePasse;
    this._credit = credit;
    this._administrateur = administrateur;
  }

  get noUtilisateur(): number {
    return this._noUtilisateur;
  }

  set noUtilisateur(value: number) {
    this._noUtilisateur = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get codePostal(): string {
    return this._codePostal;
  }

  set codePostal(value: string) {
    this._codePostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get motDePasse(): string {
    return this._motDePasse;
  }

  set motDePasse(value: string) {
    this._motDePasse = value;
  }

  get credit(): number {
    return this._credit;
  }

  set credit(value: number) {
    this._credit = value;
  }

  get administrateur(): boolean {
    return this._administrateur;
  }

  set administrateur(value: boolean) {
    this._administrateur = value;
  }
}
