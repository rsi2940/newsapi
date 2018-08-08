import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiVariablesService {
  apiUrl = 'https://newsapi.org/v2/';
  apiHeadline = 'top-headlines';
  apiCategory = 'business';
  apiKey = '62430d56912f462fbf9d9379209a2418';

  constructor() {}
}
