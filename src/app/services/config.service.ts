import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // url de l'API
  private apiPath = "http://10.103.200.1:8080/ProjetENI";

  constructor() { }

  public getApiPath(): string {
    return this.apiPath;
  }
}
