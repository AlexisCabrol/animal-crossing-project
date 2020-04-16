import {JSONBuilder} from "./JSONBuilder";

export class News extends JSONBuilder {

  id: number;
  titre: string;
  description: string;
  contenu: string;
  datePublication: Date;
}
