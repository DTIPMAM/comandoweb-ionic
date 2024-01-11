import { UserService } from 'src/app/services/user.service';
import { MODULES_ACCESS } from './data-source';
import { ModulosSX } from './../../../interfaces/left-bar.interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  public userGroup: Array<string> = [];
  public permitedModules:  Array<ModulosSX> = [];
  public showMenu: boolean = false;

  constructor(
    private router: Router,
    private userSerive: UserService
  ) {}

  ngOnInit() {
    this.userGroup = this.userSerive.getLoggedUser().grupos;
    this.setPermitedModules();
  }

  public navigateTo(url:string): void {
    this.router.navigate([url]);
  }

  private setPermitedModules(): void {
    for (let module of MODULES_ACCESS){
      if (this.canView(module.rules)){
        this.permitedModules.push(module);        
      }
    }
    this.showMenu = true;
  }

  private canView(rules: Array<string>): boolean {
    if (rules.length === 0){
      return true;
    }
   
    for (let rule of rules){
      if (this.userGroup.includes(rule)){
        return true;
      }
    }        
    return false;
  }
}
