import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsApiService {
  private apiUrl = "https://api.nytimes.com/svc/topstories/v2/";
  private apiKey = ".json?api-key=YNGrW2g9HqBo1ilYzdbS52vUAWRAJtFj";
  private apiCategory = "us";
  constructor(private http: HttpClient) {}
  // getNews(category = this.apiCategory) {
  //   this.http
  //     .get(`${this.apiUrl}${category}${this.apiKey}`)
  //     .subscribe((data: any) => {
  //       // console.log(data);
  //       return data.results;
  //     });
  // }

  async getNews(category = this.apiCategory) {
    const response = fetch(this.apiUrl + category + this.apiKey);
    const data: any = await (await response).json();
    return data;
  }
}
