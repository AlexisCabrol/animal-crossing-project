import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../../validators/MustMatch";
import {Utilisateur} from "../../models/Utilisateur";
import * as Hash from "hash.js";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent implements OnInit {

  public profilEditForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.profilEditForm = this.formBuilder.group({
      motDePasse: ['', Validators.minLength(7)],
      confirmerMotDePasse: '',
      discord: '',
      codeAmiNintendo: ''
    }, {validators: MustMatch('motDePasse', 'confirmerMotDePasse')});
  }

  public getFormField() {
    return this.profilEditForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    // On vérifie le bon état du formulaire
    if (this.profilEditForm.invalid) {
      return;
    }

    const utilisateur = new Utilisateur();
    utilisateur.frontMotDePasse = this.profilEditForm.value['motDePasse'];
    utilisateur.discord = this.profilEditForm.value['discord'] ? this.profilEditForm.value['discord'] : null;
    utilisateur.codeAmiNintendo = this.profilEditForm.value['codeAmiNintendo'] ? this.profilEditForm.value['codeAmiNintendo'] : null;

    if (utilisateur.frontMotDePasse) {
      utilisateur.motDePasse = Hash.sha512().update(utilisateur.frontMotDePasse).digest('hex');
    }

    this.authenticationService.mettreAJourUtilisateur(utilisateur);
  }
}
