import { FooterComponent } from './shared/modules/footer/footer.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InstallPromptComponent } from './shared/modules/install-prompt/install-prompt.component';
import { UpdateAppModalComponent } from './shared/modules/update-app-modal/update-app-modal.component';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'sx-pmam';
  public isLoading: boolean = true;
  public isHome: boolean = false;
  private modalVersion: boolean;

  constructor(
    private swUpdate: SwUpdate,
    private router: Router,
    private snackBar: MatSnackBar,
    private modal: MatDialog
  ) {
    this.router.events.subscribe((res) => {
      if (res instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      }
      if (res instanceof NavigationEnd) {
        this.isLoading = false;

        if (res.urlAfterRedirects.includes('/home')) {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.swUpdate.isEnabled) {
      await this.swUpdate.activateUpdate();
      this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
        if ( event.type === 'VERSION_READY' || event.type === 'VERSION_DETECTED' ) {
          this.modalVersion = true;
          console.log('updateModal');
          this.modal.open(UpdateAppModalComponent, {
            disableClose: true,
            width: 'auto',
            data: {
              modalVersion: this.modalVersion,
            },
          });
        }
      });
    }
  }

  public onResize(): void {
    FooterComponent.updateFooterPosition();
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: any): void {
    event.preventDefault();
    this.snackBar.openFromComponent(InstallPromptComponent, {
      data: { modalPwaEvent: event },
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
