import {ConstructeurSansParametre, JSONBuilder} from "./JSONBuilder";
import {Lieu} from "./Lieu";
import {Rarete} from "./Rarete";
import {TypeEspece} from "./TypeEspece";

export class Espece extends JSONBuilder {

  id: number;
  nom: string;
  periodeDebutNord: number;
  periodeFinNord: number;
  periodeDebutSud: number;
  periodeFinSud: number;
  heureDebut: number;
  heureFin: number;
  prix: number;
  lieu: Lieu;
  rarete: Rarete;
  typeEspece: TypeEspece;

  labelPeriode: string;

  static fromJson<T>(json: any, constructor: ConstructeurSansParametre<T>): T {
    const result: any = super.fromJson(json, constructor);
    const espece: Espece = result as Espece;

    if (json.lieu) {
      espece.lieu = Lieu.fromJson(json.lieu, Lieu);
    }
    if (json.rarete) {
      espece.rarete = Rarete.fromJson(json.rarete, Rarete);
    }
    if (json.typeEspece) {
      espece.typeEspece = TypeEspece.fromJson(json.typeEspece, TypeEspece);
    }

    return result;
  }
}
