import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  apiKey = '.json?api-key=YNGrW2g9HqBo1ilYzdbS52vUAWRAJtFj';
  apiCategory = 'technology';

  dataObject: any = null;
  dataArticles: any = [];
  constructor(private api: NewsApiService) {}

  async ngOnInit() {
    // this.http
    //   .get(`${this.apiUrl}${this.apiCategory}${this.apiKey}`)
    //   .subscribe((data) => {
    //     this.dataObject = data;
    //     // console.log(data);
    //     this.dataArticles = this.dataObject.articles;
    //   });
    this.dataObject = await this.api.getNews(this.apiCategory);
    console.log(this.dataObject);
    this.dataArticles = await this.dataObject.results;
    console.log(this.dataArticles);
  }
}
