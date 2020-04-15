import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private stockage = localStorage;
  private utilisateurConnecte: Utilisateur = null;

  constructor(private http: HttpClient,
              private router: Router,
              private translateService: TranslateService,
              private toastService: ToastrService) {
  }

  public login(utilisateur: Utilisateur) {
    delete utilisateur.frontMotDePasse;
    return this.http.post('http://localhost:8080/login', utilisateur)
      .subscribe((res: Utilisateur) => {

        this.stockage.setItem('id_token', res.tokenJWT);
        this.utilisateurConnecte = res;
        this.translateService.get('success.connect').subscribe((texte: string) => {
          this.toastService.success(texte);
        });
        this.router.navigate(['profil']);
      });
  }

  public logout() {
    this.stockage.removeItem('id_token');
    this.utilisateurConnecte = null;
    this.router.navigate(['/']);
    this.translateService.get('success.disconnect').subscribe((texte: string) => {
      this.toastService.success(texte);
    });
  }

  public getUtilisateurConnecter(): Utilisateur {
    return this.utilisateurConnecte;
  }

  public getConnecter(): boolean {
    return this.utilisateurConnecte !== null;
  }
}
