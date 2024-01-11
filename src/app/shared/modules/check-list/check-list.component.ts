import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit, OnChanges {
  @Input() disable: boolean = false;
  @Input() options: Array<string>;
  @Output() onCheckChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>;
  private selectedOptions: Array<string> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.disable){
      this.selectedOptions = [];
    }
  }

  ngOnInit() {
  }

  public onChangeCheck(value: Event): void {
    const element: HTMLInputElement = value.target as HTMLInputElement;
    if (element.checked){
      this.insertItemList(element.value);
    } else {
      this.removeListItem(element.value);
    }
    this.emitList()
  }

  private insertItemList(value:string): void {
    if (!this.selectedOptions.includes(value)){
      this.selectedOptions.push(value);
    }
  }

  private removeListItem(value:string): void {
    const index = this.selectedOptions.indexOf(value);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  private emitList(): void {
    this.onCheckChange.emit(this.selectedOptions);
  }
}
