import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";
import {Router} from "@angular/router";
import {MessageHandlerService} from "./handlers/message-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private stockage = localStorage;
  private isUtilisateurConnecte: boolean = false;

  constructor(private http: HttpClient,
              private router: Router,
              private messageHandlerService: MessageHandlerService) {
  }

  public login(utilisateur: Utilisateur) {
    return this.http.post('http://localhost:8080/login', utilisateur)
      .subscribe((res: any) => {
        this.stockage.setItem('id_token', res);
        this.isUtilisateurConnecte = true;
        this.router.navigate(['poissons']);
      });
  }

  public logout() {
    this.stockage.removeItem('id_token');
    this.isUtilisateurConnecte = false;
    this.router.navigate(['/']);
  }

  public getConnecter(): boolean {
    return this.isUtilisateurConnecte;
  }
}
