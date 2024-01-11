import { HtmlUtils } from './../../utils/html.utils';
import { constants } from 'src/environments/constants';
import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  public arrayCopyright: Array<string> = constants.copyright.split('.');
  public isMobileDevice: boolean = HtmlUtils.isMobileDevice();

  constructor() {}

  ngAfterViewInit(): void {
    FooterComponent.setFooterPosition();
  }

  ngOnInit() {}

  // set footer position on screen
  private static setFooterPosition(): void {
    const windowHeight: number = Math.max(window.innerHeight, window.outerHeight);
    const footer = document.getElementById('smi-footer');
    const body = document.body;
    const bodyHeight: number = Math.max(body.clientHeight, body.scrollHeight, body.offsetHeight);

    if (footer !== null){
      const footerHeight = Math.max(footer.scrollHeight, footer.offsetHeight, footer.clientHeight);
      if (footer.classList.contains('fixed-footer')){
        if (windowHeight < bodyHeight+(footerHeight*2)){
          footer.classList.remove('fixed-footer');
        }
      } else {
        if (windowHeight >= bodyHeight+(footerHeight)) {
          footer.classList.add('fixed-footer');
        }
      }
    }
  }

  // access from hotlistener
  public static updateFooterPosition(): void {
    FooterComponent.setFooterPosition();
  }
}
