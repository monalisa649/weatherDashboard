import { Component, Input} from '@angular/core';
import { Weather } from 'src/app/interfaces/weatherInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() weather : Weather;

  constructor() {}

}

