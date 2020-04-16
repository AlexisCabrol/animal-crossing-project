import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../models/News";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  public getToutesNews(): Observable<News[]> {
    return this.http.get('http://localhost:8080/news').pipe(
      map((res: News[]) => {
        const result = [];
        for (let i = 0; i < res.length; i++) {
          result.push(News.fromJson(res[i], News));
        }
        return result;
      }));
  }
}
