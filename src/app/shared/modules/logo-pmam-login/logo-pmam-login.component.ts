import { constants } from 'src/environments/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-pmam-login',
  templateUrl: './logo-pmam-login.component.html',
  styleUrls: ['./logo-pmam-login.component.scss']
})
export class LogoPmamLoginComponent implements OnInit {
  public appName: string = constants.appName;
  public appInitials: string = constants.appinitials;

  constructor() { }

  ngOnInit() {
  }

}
