export interface ConstructeurSansParametre<T> {
  new(): T;
}

export abstract class JSONBuilder {

  static fromJson<T>(json: any, constructor: ConstructeurSansParametre<T>): T {
    return Object.assign(new constructor(), json);
  }

  static toJson<T>(objet: T): any {
    return Object.assign({}, objet);
  }

  toJson(): any {
    return JSONBuilder.toJson(this);
  }
}
