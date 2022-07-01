import { Injectable } from '@angular/core';
import {DateTime} from "../modeles/DateTime";

@Injectable({
  providedIn: 'root'
})
export class GestionDatesService {

  private tabmois: string[] = ["", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  constructor() { }

  public dateToString(date: DateTime): string {
    return date.dayOfMonth + " " + this.tabmois[date.monthValue] + " " + date.year;
  }
}
