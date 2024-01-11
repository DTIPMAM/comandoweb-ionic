import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {
  @Input() userName: string;
  @Input() userUnity: string;

  public userGrupos: Array<string> = []; 

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userGrupos = this.userService.getLoggedUser().grupos;
  }

  public navigateTo(url:string): void {
    this.router.navigate([url]);
  }

  public falarComSuporte(): void {
    window.open("https://api.whatsapp.com/send?phone=5592988421813&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20no%20sistema%20X!%20aguardo%20seu%20retorno!", "_blank");
  }

  public logout(): void {
    this.userService.logout();
  }
}
