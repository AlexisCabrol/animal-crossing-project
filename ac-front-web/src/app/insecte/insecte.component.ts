import {Component, OnInit} from '@angular/core';
import {Espece} from "../models/Espece";
import {TypeEspeceEnum} from "../models/enums/TypeEspeceEnum";
import {EspeceService} from "../services/espece.service";
import {CaptureService} from "../services/capture.service";

@Component({
  selector: 'app-insecte',
  templateUrl: './insecte.component.html',
  styleUrls: ['./insecte.component.css']
})
export class InsecteComponent implements OnInit {

  public listeEspece: Espece[] = [];
  public listeEspeceCapture: number[] = [];
  public TypeEspeceEnum = TypeEspeceEnum;

  constructor(private especeService: EspeceService,
              private captureService: CaptureService) {
  }

  ngOnInit(): void {
    this.captureService.getEspecesCaptures().subscribe((liste: number[]) => {
      this.listeEspeceCapture = liste;
    });

    this.especeService.getInsectes().subscribe((liste: Espece[]) => {
      this.listeEspece = this.especeService.traitementPostAPI(liste);
    });
  }

  public mettreAJourListeEspeceCapture(liste: number[]): void {
    this.listeEspeceCapture = liste;
  }

}
