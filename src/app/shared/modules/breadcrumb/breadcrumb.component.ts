import { HtmlUtils } from './../../utils/html.utils';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() haveMargin: boolean = true;
  public routesArray: Array<string> = [];
  public titlePage: string = "";
  public isMobileDevice: boolean = false;

  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.isMobileDevice = HtmlUtils.isMobileDevice();
    this.routesArray = this.router.url.split("/");
    this.titlePage = this.titleService.getTitle();
  }

  public navigateTo(route:string): void {
    this.router.navigate([this.getFullRoute(route)]);
  }

  private getFullRoute(route:string): string {
    const routeIndex: number = this.routesArray.indexOf(route);
    let fullRoute: string = "";
    this.routesArray.forEach((value, index) => {
      if (index <= routeIndex) {
        fullRoute += value+"/";
      }
    });
    return fullRoute;
  }
}
