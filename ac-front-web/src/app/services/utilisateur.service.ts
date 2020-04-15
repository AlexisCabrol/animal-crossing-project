import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) {
  }

  public inscrire(utilisateur: Utilisateur): Observable<any> {
    return this.http.post('http://localhost:8080/register', utilisateur);
  }
}
