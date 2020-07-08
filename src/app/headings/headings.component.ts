import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "../news-api.service";

@Component({
  selector: "app-headings",
  templateUrl: "./headings.component.html",
  styleUrls: ["./headings.component.scss"],
})
export class HeadingsComponent implements OnInit {
  apiCategory = "world";

  dataObject = null;
  dataArticles = [];
  constructor(private api: NewsApiService) {}

  async ngOnInit() {
    this.dataObject = await this.api.getNews(this.apiCategory);
    this.dataArticles = await this.dataObject.results;
  }
}
