import {Component, OnInit} from '@angular/core';
import {EspeceService} from "../services/espece.service";
import {Espece} from "../models/Espece";
import {TypeEspeceEnum} from "../models/enums/TypeEspeceEnum";

@Component({
  selector: 'app-poisson',
  templateUrl: './poisson.component.html',
  styleUrls: ['./poisson.component.css']
})
export class PoissonComponent implements OnInit {

  public listeEspece: Espece[] = [];
  public TypeEspeceEnum = TypeEspeceEnum;

  constructor(private especeService: EspeceService) {
  }

  ngOnInit(): void {
    this.especeService.getPoissons().subscribe((liste: Espece[]) => {
      const moisCourant = new Date().getMonth() + 1;
      const heureCourante = new Date().getHours() + 1;

      this.listeEspece = liste.filter((espece: Espece) => {
        if (espece.periodeFinNord >= moisCourant && espece.periodeDebutNord <= moisCourant) {
          return espece.heureDebut <= heureCourante && espece.heureFin >= heureCourante;
        } else if (espece.periodeDebutNord > espece.periodeFinNord) {
          if ((espece.periodeDebutNord >= moisCourant && espece.periodeDebutNord <= 12)
            && (espece.periodeFinNord >= moisCourant && 1 <= espece.periodeFinNord)) {
            return espece.heureDebut <= heureCourante && espece.heureFin >= heureCourante;
          }
        }
      });
    });
  }

}
