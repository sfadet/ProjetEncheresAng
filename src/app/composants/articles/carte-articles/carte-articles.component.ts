import { Component, Input, OnInit } from '@angular/core';
import {Article} from "../../../modeles/Article";

@Component({
  selector: 'app-carte-articles',
  templateUrl: './carte-articles.component.html',
  styleUrls: ['./carte-articles.component.css']
})
export class CarteArticlesComponent implements OnInit {

  @Input()
  public article!: Article;
  public img: string = "";
  public url: string = "";

  constructor() { }

  ngOnInit(): void {
    this.img = "./assets/images/"+this.article.nomArticle.toLowerCase()+"-"+this.article.noUtilisateurVendeur+".jpg"
    this.url = this.article.noArticle+"/"+this.article.nomArticle.toLowerCase().replace(" ","-");
  }

  public setDefaultPic() {
    this.img = "./assets/images/camera.jpg";
  }

}
