import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs";
import {Espece} from "../models/Espece";

@Injectable({
  providedIn: 'root'
})
export class EspeceService {

  constructor(private http: HttpClient) {
  }

  /**
   * Méthode permettant de faire appel à l'API pour avoir la liste de toutes les espèces
   */
  public getToutesEspeces(): Observable<Espece[]> {

    return this.http.get('http://localhost:8080/especes').pipe(
      map((res: Espece[]) => {
        const result = [];
        for (let i = 0; i < res.length; i++) {
          result.push(Espece.fromJson(res[i], Espece));
        }
        return result;
      }));
  }

  /**
   * Méthode permettant de faire appel à l'API pour avoir la liste des poissons
   */
  public getPoissons(): Observable<Espece[]> {
    return this.http.get('http://localhost:8080/poissons').pipe(
      map((res: Espece[]) => {
        const result = [];
        for (let i = 0; i < res.length; i++) {
          result.push(Espece.fromJson(res[i], Espece));
        }
        return result;
      }));
  }

  /**
   * Méthode permettant de faire appel à l'API pour avoir la liste des insectes
   */
  public getInsectes(): Observable<Espece[]> {
    return this.http.get('http://localhost:8080/insectes').pipe(
      map((res: Espece[]) => {
        const result = [];
        for (let i = 0; i < res.length; i++) {
          result.push(Espece.fromJson(res[i], Espece));
        }
        return result;
      }));
  }
}
