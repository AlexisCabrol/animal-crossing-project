import {Component, Input, OnInit} from '@angular/core';
import {TypeEspeceEnum} from "../../models/enums/TypeEspeceEnum";
import {Espece} from "../../models/Espece";
import {Rarete} from "../../models/Rarete";
import {RareteEnum} from "../../models/enums/RareteEnum";

@Component({
  selector: 'app-liste-esp',
  templateUrl: './liste-esp.component.html',
  styleUrls: ['./liste-esp.component.css']
})
export class ListeEspComponent implements OnInit {

  @Input() typeEspece: TypeEspeceEnum;
  @Input() listeEspece: Espece[];

  constructor() {
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

}
