import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  apiUrl = 'https://newsapi.org/v2/';
  apiHeadline = 'top-headlines';
  apiCategory = 'sports';
  apiKey = '62430d56912f462fbf9d9379209a2418';

  dataObject = null;
  dataArticles = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        `${this.apiUrl}${this.apiHeadline}?country=us&category=${
          this.apiCategory
        }&apiKey=${this.apiKey}`
      )
      .subscribe(data => {
        this.dataObject = data;
        // console.log(data);
        this.dataArticles = this.dataObject.articles;
      });
  }
}
