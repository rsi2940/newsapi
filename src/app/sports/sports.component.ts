import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "../news-api.service";

@Component({
  selector: "app-sports",
  templateUrl: "./sports.component.html",
  styleUrls: ["./sports.component.scss"],
})
export class SportsComponent implements OnInit {
  apiCategory = "sports";

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
