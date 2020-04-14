import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private stockage = localStorage;
  private isUtilisateurConnecte: boolean = false;

  constructor(public http: HttpClient) {
  }

  public login(utilisateur: Utilisateur) {
    return this.http.post('http://localhost:8080/login', utilisateur)
      .subscribe((res: any) => {
        this.stockage.setItem('id_token', res);
        this.isUtilisateurConnecte = true;
      });
  }

  public logout() {
    this.stockage.removeItem('id_token');
    this.isUtilisateurConnecte = false;
  }

  public getConnecter(): boolean {
    return this.isUtilisateurConnecte;
  }
}
