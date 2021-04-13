import { Component, Input} from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() weather : any;
  /** Based on the screen size, switch from standard to one column per row */


  constructor() {}

}

