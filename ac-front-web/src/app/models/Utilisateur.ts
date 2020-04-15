import {JSONBuilder} from "./JSONBuilder";

export class Utilisateur extends JSONBuilder {

  id: number;
  identifiant: string;
  motDePasse: string;
  email: string;
  discord: string;
  codeAmiNintendo: string;
  tokenJWT: string;
}
