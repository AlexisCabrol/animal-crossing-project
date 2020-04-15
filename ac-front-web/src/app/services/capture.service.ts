import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CaptureService {

  constructor(private http: HttpClient) {
  }

  public capturerEspece(idEspece: number): Observable<number[]> {
    return this.http.post('http://localhost:8080/capture/add', idEspece).pipe(
      map((liste: number[]) => {
        return liste;
      }));
  }

  public getEspecesCaptures(): Observable<number[]> {
    return this.http.get('http://localhost:8080/capture').pipe(
      map((liste: number[]) => {
        return liste;
      }));
  }

  public supprimerEspeceCapture(idEspece: number): Observable<number[]> {
    return this.http.post('http://localhost:8080/capture/delete', idEspece).pipe(
      map((liste: number[]) => {
        return liste;
      }));
  }
}
