import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Article} from "../modeles/Article";
import {firstValueFrom} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient, private config: ConfigService, private route: Router) {}


  public getArticles(): Article[] {
    let tabArticle: Article[] = [];

    firstValueFrom(this.http.get<Article[]>(this.config.getApiPath()+'/ws/articles')).then(
      (data) => {
        for (let a of data){
          tabArticle.push(a);
        }
      }
    )

    return tabArticle;
  }

  getArticleById(id: string): Article {
    let articleRetour: Article = new Article(0,"","",0,0,0);

    firstValueFrom(this.http.get<Article>(this.config.getApiPath()+'/ws/articles/'+id)).then(
      (data) => {
        if(!data){
          this.route.navigate(['/']);
        } else {
          articleRetour = data;
        }
      }
    )

    return articleRetour;
  }
}
