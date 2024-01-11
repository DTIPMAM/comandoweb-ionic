import { Component, OnInit, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.scss']
})
export class NgxLoaderComponent implements OnInit {
  @Input() isDataSourceLoading: boolean = false;
  @Input() loaderId: string = "loader-login";

  constructor(
    private ngxService: NgxUiLoaderService
  ) { }
  
  ngOnInit() {
    if (this.isDataSourceLoading) {
      this.ngxService.startLoader('loaderDataSource');
    } else {
      this.ngxService.startLoader(this.loaderId);
    }
  }

}
