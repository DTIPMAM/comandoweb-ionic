import { HtmlUtils } from './../../utils/html.utils';
import { Router } from '@angular/router';
import { constants } from 'src/environments/constants';
import { Component, OnInit } from '@angular/core';
import json from '../../../../../package.json';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'sx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public versionApp: string = json.version;
  public nameApp: string = constants.appinitials;
  public userName: string;
  public userUnity: string;
  public statusNotificacao: string = "";

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.setUserData();
    this.verifyIsMobile();
    window.addEventListener('resize', this.verifyIsMobile);
  }

  private setUserData(): void {
    this.userName = this.userService.getLoggedUser().nome;
    this.userUnity = this.userService.getLoggedUser().user;
  }

  public navigateTo(url:string): void {
    this.router.navigate([url]);
  }

  // set NavBar type to device screen
  private verifyIsMobile(): void {
    const navBar = document.getElementById('navBar');
    const navBarMobile = document.getElementById('navBarMobile');
    if (navBar !== null && navBarMobile !== null){
      if (HtmlUtils.isMobileDevice()){
        navBar.style.display = "none";
        navBarMobile.style.display = "block";
      } else {
        navBarMobile.style.display = "none";
        navBar.style.display = "block";
      }
    }
  }

  // close navBarMobile expanded aria
  public closeMobileNavBar(): void {
    const collapse = document.getElementById("btn-expanded");
    const navbarNavAltMarkup = document.getElementById("navbarNavAltMarkup");

    if (collapse !== null && navbarNavAltMarkup !== null){
      collapse.setAttribute("aria-expanded", "false");
      collapse.classList.remove("collapsed");
      navbarNavAltMarkup.classList.remove("show");
    }
  }
  
  public logout(): void {
    this.userService.logout();
  }
}
