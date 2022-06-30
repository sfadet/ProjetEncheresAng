export class Categorie {
  private _noCategorie: number;
  private _libelle: string;

  constructor(noCategorie: number, libelle: string) {
    this._noCategorie = noCategorie;
    this._libelle = libelle;
  }

  get noCategorie(): number {
    return this._noCategorie;
  }

  set noCategorie(value: number) {
    this._noCategorie = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }
}
