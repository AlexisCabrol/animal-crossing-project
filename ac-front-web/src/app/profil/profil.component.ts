import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Utilisateur} from "../models/Utilisateur";
import {EspeceService} from "../services/espece.service";
import {Espece} from "../models/Espece";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public utilisateurCourant: Utilisateur;
  public listeEspeceCapture: Espece[] = [];

  constructor(private authenticationService: AuthenticationService,
              private especeService: EspeceService) {
  }

  ngOnInit(): void {
    this.utilisateurCourant = this.authenticationService.getUtilisateurConnecter();
    this.especeService.getSelectionnerToutesEspecesCapture().subscribe((liste: Espece[]) => {
      this.listeEspeceCapture = liste;
    });
  }

  public getPhotoUrl(espece: Espece): string {
    return "../../../assets/espece/" + espece.id + ".png";
  }

}
