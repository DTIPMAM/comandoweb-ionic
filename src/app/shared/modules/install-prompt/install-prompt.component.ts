import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Platform } from '@angular/cdk/platform';
import { constants } from 'src/environments/constants';

@Component({
  selector: 'app-install-prompt',
  templateUrl: './install-prompt.component.html',
  styleUrls: ['./install-prompt.component.scss'],
})
export class InstallPromptComponent implements OnInit {
  public modalPwaEvent: any;
  public modalPwaPlatform: string | undefined;
  public systemName: string = constants.appinitials;

  constructor(
    public snackBarRef: MatSnackBarRef<any>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private platform: Platform
  ) {
  }

  ngOnInit(): void {
    this.loadModalPwa();
  }

  private loadModalPwa(): void {
    if (this.platform.isBrowser) {
        this.modalPwaPlatform = 'isBrowser';
    }
    if (this.platform.ANDROID) {
        this.modalPwaPlatform = 'ANDROID';
    }
    if (this.platform.IOS && this.platform.SAFARI) {
        this.modalPwaPlatform = 'IOS';
    }
  }

  public addToHomeScreen(): void {
    this.snackBarRef.dismiss();
    this.data.modalPwaEvent.prompt();
    this.modalPwaPlatform = undefined;
  }

  close(): void {
    this.modalPwaPlatform = undefined;
    this.snackBarRef.dismiss();
  }
}
