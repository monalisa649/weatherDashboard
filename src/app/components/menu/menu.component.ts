import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit{

  weatherRes: any;
  public cityName:string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _dataService: DataServiceService
    ) {


    }

    ngOnInit(){
    this.cityName = 'manizales';
    this.getWeather(this.cityName);
    }

getWeather(cityName:string){
  this._dataService.getWeather(cityName)
    .subscribe((res:Response) =>{
    this.weatherRes = res;
    console.log(this.weatherRes);
   })





    }


  sendLocation(cityName: HTMLInputElement){
    this.getWeather(cityName.value);
    console.log(cityName.value);
    cityName.value ='';
    cityName.focus();
    return false;
  }


}
