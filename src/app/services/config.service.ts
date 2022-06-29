import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // url de l'API
  private apiPath = "http://10.103.200.4:8080/ProjetENI/ws";

  constructor() { }

  public getApiPath(): string {
    return this.apiPath;
  }
}
