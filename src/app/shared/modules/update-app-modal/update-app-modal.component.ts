import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

type MatSnackBarUpdateApp = {
  modalVersion: boolean;
};

@Component({
  selector: 'app-update-app-modal',
  templateUrl: './update-app-modal.component.html',
  styleUrls: ['./update-app-modal.component.scss']
})
export class UpdateAppModalComponent{
  constructor(
    public modalRef: MatDialogRef<UpdateAppModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatSnackBarUpdateApp
  ) { }

  public updateVersion(): void {
    this.data.modalVersion = false;
    window.location.reload();
  }

}
