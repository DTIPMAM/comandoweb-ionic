import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HtmlUtils } from '../../utils/html.utils';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.scss']
})
export class ImageGaleryComponent implements OnInit {
  public isMobileDevice: boolean = false;
  public fotos: Array<string> = [];
  public selectdIndex: number = 0;
  public fotosCount: number = 0;
  public title: string = "Listagem de Fotos"
  public height: number;

  constructor(
    public dialogRef: MatDialogRef<ImageGaleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {fotos: Array<string>, index: number, title: string}
  ) { }

  ngOnInit() {
    this.isMobileDevice = HtmlUtils.isMobileDevice();
    this.fotos = this.data.fotos;
    this.selectdIndex = this.data.index;
    this.fotosCount = this.fotos.length;
    this.title = this.data.title;
    this.height = Math.max(window.innerHeight, window.outerHeight);
  }

  public onCloseClick(): void {
    this.dialogRef.close();
  }

  public setIndex(index: number): void {
    this.selectdIndex = index;
  }

  public onResize(): void {
    this.height = Math.max(window.innerHeight, window.outerHeight);
  }

  public download(): void {
    let a = document.createElement("a"); //Create <a>
    a.href = this.fotos[this.selectdIndex]; //Image Base64 Goes here
    a.download = `IMG_${this.selectdIndex+1} - [${this.title}].jpg`; //File name Here
    a.click();
  }
}
