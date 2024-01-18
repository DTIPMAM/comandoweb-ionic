import { constants } from 'src/environments/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-pmam-login',
  templateUrl: './logo-pmam-login.component.html',
  styleUrls: ['./logo-pmam-login.component.scss']
})
export class LogoPmamLoginComponent  {
  public appName: string = constants.appName;
  public appInitials: string = constants.appinitials;

  constructor() { }

}
