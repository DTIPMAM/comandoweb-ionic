import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'check-military',
  templateUrl: './check-military.component.html',
  styleUrls: ['./check-military.component.scss']
})
export class CheckMilitaryComponent implements OnInit {
  @Output() onMilitaryChecked = new EventEmitter<boolean>;

  constructor() { }

  ngOnInit() {
  
  }

  public emmitValidation(): void {
    this.onMilitaryChecked.emit(true);
  }
}
