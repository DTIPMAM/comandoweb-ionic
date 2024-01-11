import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserSystemInterface } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { constants } from 'src/environments/constants';
import json from '../../../../../package.json'

@Component({
  selector: 'user-print-mark',
  templateUrl: './user-print-mark.component.html',
  styleUrls: ['./user-print-mark.component.scss']
})
export class UserPrintMarkComponent implements OnInit {
  public user: UserSystemInterface
  public systemInfo: string = constants.appinitials +" - PMAM v"+ json.version;
  public titlePage: string;
  public actualRoute: string = "";

  constructor(
    private userService: UserService,
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {
    window.addEventListener('hashchange', (event) => {
      console.log('navegou evento');
      this.setValues();
    });

    this.setValues();
    this.subscribeRouter();
  }

  private setValues(): void {
    this.user = this.userService.getLoggedUser();
    this.titlePage = this.titleService.getTitle();
    this.actualRoute = this.router.url;
  }

  private subscribeRouter(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        setTimeout(() => {
          this.setValues();
        }, 200);
      }
    });
  }
}
