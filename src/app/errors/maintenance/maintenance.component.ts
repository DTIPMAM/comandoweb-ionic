import { Router } from '@angular/router';
import { HtmlUtils } from './../../shared/utils/html.utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  public isMobileDevice: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isMobileDevice = HtmlUtils.isMobileDevice();
  }

  public navToHome(): void {
    this.router.navigate(['']);
  }
}
