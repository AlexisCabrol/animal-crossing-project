import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {UtilisateurService} from "../services/utilisateur.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public utilisateur: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  public lancerInscription(): void {
    // TODO : faire les contrôles de saisie
    this.utilisateurService.inscrire(this.utilisateur).subscribe(() => {
      console.log("coucou");
    });
  }

}
