import { HtmlUtils } from './../../shared/utils/html.utils';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
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
