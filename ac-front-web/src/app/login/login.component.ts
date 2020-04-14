import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public utilisateur: Utilisateur;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  public lancerIdentification(): void {
    // TODO : faire les contrôles de saisie
    this.authenticationService.login(this.utilisateur);
  }

}
