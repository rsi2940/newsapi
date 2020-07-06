import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "../news-api.service";

@Component({
  selector: "app-business",
  templateUrl: "./business.component.html",
  styleUrls: ["./business.component.scss"],
})
export class BusinessComponent implements OnInit {
  apiCategory = "business";

  dataObject = null;
  dataArticles = [];
  constructor(private api: NewsApiService) {}

  async ngOnInit() {
    this.dataObject = await this.api.getNews(this.apiCategory);
    console.log(this.dataObject);
    this.dataArticles = await this.dataObject.results;
    console.log(this.dataArticles);
  }
}
