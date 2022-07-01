import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Enchere} from "../modeles/Enchere";
import {firstValueFrom} from "rxjs";
import {Article} from "../modeles/Article";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class EncheresService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public getEncheresByArticleId(id: number): Enchere[] {
    let tabEncheres: Enchere[] = [];

    firstValueFrom(this.http.get<Enchere[]>(this.config.getApiPath()+'/ws/encheres/article/'+id)).then(
      (data) => {
        for (let e of data){
          tabEncheres.push(e);
        }
      }
    )

    return tabEncheres;
  }
}
