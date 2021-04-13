import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  private url: string;
  private key: string;


  constructor(private _htpp : HttpClient ) {

      this.url = environment.apiUrl;
      this.key = environment.apiKey;

  }

  getWeather(name:string){
    return this._htpp.get(`${this.url}${name}&appid=${this.key}`);

  }





}
