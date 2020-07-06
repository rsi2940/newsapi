import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  private apiKey = '.json?api-key=YNGrW2g9HqBo1ilYzdbS52vUAWRAJtFj';
  private apiCategory = 'us';
  constructor() {}

  async getNews(category = this.apiCategory) {
    const response = fetch(this.apiUrl + category + this.apiKey);
    const data: any = await (await response).json();
    return data;
  }
}
