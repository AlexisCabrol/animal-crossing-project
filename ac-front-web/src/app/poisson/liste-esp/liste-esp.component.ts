import {Component, Input, OnInit} from '@angular/core';
import {TypeEspeceEnum} from "../../models/enums/TypeEspeceEnum";
import {Espece} from "../../models/Espece";
import {Rarete} from "../../models/Rarete";
import {RareteEnum} from "../../models/enums/RareteEnum";
import {TranslateService} from "@ngx-translate/core";
import {CaptureService} from "../../services/capture.service";

@Component({
  selector: 'app-liste-esp',
  templateUrl: './liste-esp.component.html',
  styleUrls: ['./liste-esp.component.css']
})
export class ListeEspComponent implements OnInit {

  @Input() typeEspece: TypeEspeceEnum;
  @Input() listeEspece: Espece[];

  constructor(private translateService: TranslateService,
              private captureService: CaptureService) {
  }

  ngOnInit(): void {
  }

  public getRareteCouleur(rarete: Rarete): string {
    if (rarete.id === RareteEnum.TRES_RARE) {
      return 'badge-warning';
    } else if (rarete.id === RareteEnum.RARE) {
      return 'badge-info';
    } else if (rarete.id === RareteEnum.COMMUN) {
      return 'badge-light';
    }
  }

  public getPhotoUrl(espece: Espece): string {
    return "../../../assets/espece/" + espece.id + ".png";
  }

  public getMoisLabel(espece: Espece): string {
    let label = null;

    if (espece.periodeDebutNord === 1 && espece.periodeFinNord === 12) {
      this.translateService.get('mois.tt-annee').subscribe((text: string) => {
        label = text;
      });
    } else {
      let moisDebut: string = null;
      let moisFin: string = null;
      this.translateService.get(espece.periodeDebutNord.toString()).subscribe((text: string) => {
        moisDebut = text;
      });
      this.translateService.get(espece.periodeFinNord.toString()).subscribe((text: string) => {
        moisFin = text;
      });
      this.translateService.get('mois.periode', {'0': moisDebut, '1': moisFin}).subscribe((text: string) => {
        label = text;
      });
    }

    return label;
  }

  public getHeureLabel(espece: Espece): string {
    let label = null;

    if (espece.heureDebut === 1 && espece.heureFin === 24) {
      this.translateService.get('espece.tt-journee').subscribe((text: string) => {
        label = text;
      });
    } else {
      this.translateService.get('espece.heure', {
        '0': espece.heureDebut,
        '1': espece.heureFin
      }).subscribe((text: string) => {
        label = text;
      });
    }
    return label;
  }

  public captureEspece(espece: Espece): void {
    this.captureService.capturerEspece(espece.id).subscribe((res) => console.log("ajouter"));
  }

}
