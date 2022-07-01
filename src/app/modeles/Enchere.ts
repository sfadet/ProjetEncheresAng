import {DateTime} from "./DateTime";

export class Enchere {
  private _dateEnchere: DateTime;
  private _montantEnchere: number;
  private _noUtilisateur: number;

  constructor(dateEnchere: DateTime, montantEnchere: number, noUtilisateur: number) {
    this._dateEnchere = dateEnchere;
    this._montantEnchere = montantEnchere;
    this._noUtilisateur = noUtilisateur;
  }

  get dateEnchere(): DateTime {
    return this._dateEnchere;
  }

  set dateEnchere(value: DateTime) {
    this._dateEnchere = value;
  }

  get montantEnchere(): number {
    return this._montantEnchere;
  }

  set montantEnchere(value: number) {
    this._montantEnchere = value;
  }

  get noUtilisateur(): number {
    return this._noUtilisateur;
  }

  set noUtilisateur(value: number) {
    this._noUtilisateur = value;
  }
}
