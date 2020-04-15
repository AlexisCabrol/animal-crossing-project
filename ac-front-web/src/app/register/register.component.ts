import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {UtilisateurService} from "../services/utilisateur.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../validators/MustMatch";
import {Router} from "@angular/router";
import {MessageHandlerService} from "../services/handlers/message-handler.service";
import * as Hash from "hash.js";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: boolean = false;

  constructor(private utilisateurService: UtilisateurService,
              private formBuilder: FormBuilder,
              private router: Router,
              private messageHandlerService: MessageHandlerService) {
  }

  ngOnInit(): void {
    // On initialise le formulaire de saisie
    this.initForm();
  }

  public initForm(): void {
    this.registerForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(7)]],
      confirmerMotDePasse: ['', Validators.required],
      discord: '',
      codeAmiNintendo: ''
    }, {validators: MustMatch('motDePasse', 'confirmerMotDePasse')});
  }

  public getFormField() {
    return this.registerForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    // On vérifie le bon état du formulaire
    if (this.registerForm.invalid) {
      return;
    }

    const utilisateur = new Utilisateur();
    utilisateur.identifiant = this.registerForm.value['identifiant'];
    utilisateur.motDePasse = this.registerForm.value['motDePasse'];
    utilisateur.email = this.registerForm.value['email'];
    utilisateur.discord = this.registerForm.value['discord'];
    utilisateur.codeAmiNintendo = this.registerForm.value['codeAmiNintendo'];

    utilisateur.motDePasse = Hash.sha512().update(utilisateur.motDePasse).digest('hex');
    this.utilisateurService.inscrire(utilisateur).subscribe(() => {
      this.messageHandlerService.setMessageHandler('success.register');
      this.router.navigate(['login']);
    });
  }

}
