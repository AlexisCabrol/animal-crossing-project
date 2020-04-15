import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TypeEspeceEnum} from "../../models/enums/TypeEspeceEnum";
import {Espece} from "../../models/Espece";
import {Rarete} from "../../models/Rarete";
import {RareteEnum} from "../../models/enums/RareteEnum";
import {TranslateService} from "@ngx-translate/core";
import {CaptureService} from "../../services/capture.service";
import {Hemisphere} from "../../models/enums/HemisphereEnum";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-liste-esp',
  templateUrl: './liste-esp.component.html',
  styleUrls: ['./liste-esp.component.css']
})
export class ListeEspComponent implements OnInit, OnChanges {

  @Input() typeEspece: TypeEspeceEnum;
  @Input() listeEspece: Espece[];
  @Input() listeEspeceCapture: number[];
  @Output() outputMettreAJourListeEspeceCapture: EventEmitter<number[]> = new EventEmitter();
  listeEspeceSansFiltre: Espece[] = [];

  filtrageSurEspeceCaptureActive: boolean = false;
  hemisphereSelectione = Hemisphere.NORD;
  Hemisphere = Hemisphere;

  constructor(private translateService: TranslateService,
              private captureService: CaptureService,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.listeEspece) {
      this.updateLabelPeriode();
    }
    if (changes.listeEspeceCapture) {
      if (this.filtrageSurEspeceCaptureActive) {
        this.listeEspece = this.listeEspece.filter((espece: Espece) => !this.listeEspeceCapture.includes(espece.id));
      }
    }
  }

  public filtrerSurLesEspCapture(): void {
    if (this.listeEspeceSansFiltre.length === 0) {
      this.listeEspeceSansFiltre = this.listeEspece;
      // On filtre sur les espèces qui ne sont pas encore capturée
      this.listeEspece = this.listeEspece.filter((espece: Espece) => !this.listeEspeceCapture.includes(espece.id));
      this.filtrageSurEspeceCaptureActive = true;
    } else {
      this.listeEspece = this.listeEspeceSansFiltre;
      this.listeEspeceSansFiltre = [];
      this.filtrageSurEspeceCaptureActive = false;
    }
  }

  public changeHemisphere(nouvelHemisphere: Hemisphere): void {
    this.hemisphereSelectione = nouvelHemisphere;
    this.updateLabelPeriode();
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

  public updateLabelPeriode(): void {
    this.listeEspece.forEach((espece: Espece) => {
      let label = null;

      if (espece.periodeDebutNord === 1 && espece.periodeFinNord === 12) {
        this.translateService.get('mois.tt-annee').subscribe((text: string) => {
          label = text;
        });
      } else {
        let moisDebut: string = null;
        let moisFin: string = null;
        this.translateService.get(this.hemisphereSelectione === Hemisphere.NORD ?
          espece.periodeDebutNord.toString() : espece.periodeDebutSud.toString()).subscribe((text: string) => {
          moisDebut = text;
        });
        this.translateService.get(this.hemisphereSelectione === Hemisphere.NORD ?
          espece.periodeFinNord.toString() : espece.periodeFinSud.toString()).subscribe((text: string) => {
          moisFin = text;
        });
        this.translateService.get('mois.periode', {'0': moisDebut, '1': moisFin}).subscribe((text: string) => {
          label = text;
        });
      }
      espece.labelPeriode = label;
    });
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
    if (this.listeEspeceCapture.includes(espece.id)) {
      // Si l'espèce est présente dans la liste : on supprime la capture
      this.captureService.supprimerEspeceCapture(espece.id)
        .subscribe((liste: number[]) => {
          this.translateService.get('success.capture.delete').subscribe((texte: string) => {
            this.toastService.success(texte, null, {timeOut: 2000});
            this.outputMettreAJourListeEspeceCapture.emit(liste);
          })
        });
    } else {
      // Si l'espèce n'est pas dans la liste : on capture
      this.captureService.capturerEspece(espece.id)
        .subscribe((liste: number[]) => {
          this.translateService.get('success.capture.add').subscribe((texte: string) => {
            this.toastService.success(texte, null, {timeOut: 2000});
            this.outputMettreAJourListeEspeceCapture.emit(liste)
          });
        });

    }
  }

}
