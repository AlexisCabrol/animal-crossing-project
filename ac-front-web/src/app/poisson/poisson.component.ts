import {Component, OnInit} from '@angular/core';
import {EspeceService} from "../services/espece.service";
import {Espece} from "../models/Espece";
import {TypeEspeceEnum} from "../models/enums/TypeEspeceEnum";
import {CaptureService} from "../services/capture.service";

@Component({
  selector: 'app-poisson',
  templateUrl: './poisson.component.html',
  styleUrls: ['./poisson.component.css']
})
export class PoissonComponent implements OnInit {

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

    this.especeService.getPoissons().subscribe((liste: Espece[]) => {
      this.listeEspece = this.especeService.traitementPostAPI(liste);
    });
  }

  public mettreAJourListeEspeceCapture(liste: number[]): void {
    this.listeEspeceCapture = liste;
  }

}
