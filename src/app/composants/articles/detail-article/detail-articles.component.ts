import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../../services/articles.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../../modeles/Article";
import {GestionDatesService} from "../../../services/gestion-dates.service";
import {DateTime} from "../../../modeles/DateTime";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-articles.component.html',
  styleUrls: ['./detail-articles.component.css']
})
export class DetailArticlesComponent implements OnInit {

  public id: string = "";
  public article: Article[] = [];
  public img: string = "";
  public isLogged: boolean = false;
  public montantEnchere: number = 0;

  constructor(private route: ActivatedRoute, private articleSvc: ArticlesService, private dateSvc: GestionDatesService, private loginSvc: UserService) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.article = this.articleSvc.getArticleById(this.id);
    this.isLogged = this.loginSvc.getIsLogged();
  }

  ngOnInit(): void {
  }

  public setDefaultPic() {
    this.img = "./assets/images/camera.jpg";
  }

  public formatDate(date: DateTime): string {
    return this.dateSvc.dateToString(date);
  }

  public getCredit(): number {
    return this.loginSvc.user.credit;
  }
}
