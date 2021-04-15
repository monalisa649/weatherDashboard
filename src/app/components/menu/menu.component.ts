import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Weather } from '../../interfaces/weatherInterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  weather: Weather;
  public cityName: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _dataService: DataServiceService
  ) {
    this.cityName = 'bogota';
  }

  ngOnInit() {
    this.getWeather(this.cityName);
  }



  getWeather(cityName: string) {
    if(cityName==""){
      Swal.fire('Invalid name')
    }
    this._dataService.getWeather(cityName).subscribe(
      (res: Weather) => {
        this.weather = res;
        console.log(this.weather);
      },
      (err) => {
        if(err.status=="404")
        Swal.fire('City not found');

      }

    );
  }

  sendLocation(cityName: HTMLInputElement) {
    this.getWeather(cityName.value);
    console.log(cityName.value);
    cityName.value = '';
    cityName.focus();
    return false;
  }
}
