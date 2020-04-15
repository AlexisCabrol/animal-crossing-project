import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Utilisateur} from "../models/Utilisateur";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public utilisateurCourant: Utilisateur;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.utilisateurCourant = this.authenticationService.getUtilisateurConnecter();
  }

}
