import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'radius-list',
  templateUrl: './radius-list.component.html',
  styleUrls: ['./radius-list.component.scss']
})
export class RadiusListComponent implements OnInit {
  @Input() options: Array<string>;
  @Output() onCheckChange = new EventEmitter<Array<string>>;

  constructor() { }

  ngOnInit(): void {
  }

}
