import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../../services/articles.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../../modeles/Article";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-articles.component.html',
  styleUrls: ['./detail-articles.component.css']
})
export class DetailArticlesComponent implements OnInit {

  public id: string = "";
  public article: Article;

  constructor(private route: ActivatedRoute, private articleSvc: ArticlesService) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.article = this.articleSvc.getArticleById(this.id);
  }

  ngOnInit(): void {
  }

}
