import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {UtilisateurService} from "../services/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public utilisateur: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  public lancerIdentification(): void {
    // TODO : faire les contrôles de saisie
    this.utilisateurService.identification(this.utilisateur).subscribe(() => {
      console.log("coucou");
    });
  }

}
