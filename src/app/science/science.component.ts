import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'],
})
export class ScienceComponent implements OnInit {
  apiCategory = 'science';

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
