import { Component, OnInit } from '@angular/core';
import {Article} from "../../../modeles/Article";
import {ArticlesService} from "../../../services/articles.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  public articles: Article[] = [];

  constructor(private articleSrv: ArticlesService, private loginServ: UserService) {
    this.articles = this.articleSrv.getArticles();
  }

  ngOnInit(): void {
  }

}
