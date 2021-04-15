import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Weather } from '../interfaces/weatherInterface';
import { Observable } from 'rxjs';


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

  getWeather(name:string):Observable<Weather>{
    return this._htpp.get<Weather>(`${this.url}${name}&units=metric&appid=${this.key}`);
    // .pipe(map(res=>{
    //   return res['main'];
    // }));

  }





}
