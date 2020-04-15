import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {AuthenticationService} from "../services/authentication.service";
import {MessageHandlerService} from "../services/handlers/message-handler.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public utilisateur: Utilisateur;
  public message: string = null;

  constructor(private authenticationService: AuthenticationService,
              private messageHandlerService: MessageHandlerService) {
  }

  ngOnInit(): void {
    this.traitementOuvertureLogin();
  }

  public traitementOuvertureLogin(): void {
    // On récupère des éventuels messages
    this.message = this.messageHandlerService.getValueMessageHandler();
    this.messageHandlerService.clearMessageHandler();
    this.utilisateur = new Utilisateur();
  }

  public lancerIdentification(): void {
    this.message = null;
    this.authenticationService.login(this.utilisateur);
  }

}
