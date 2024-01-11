import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent implements OnInit {
  public separatorKeysCodes: Array<number> = [ENTER, COMMA];
  public oprtionCtrl = new FormControl('');
  public filteredOptions: Observable<Array<string>>;
  public options: Array<string> = [];
  @Input() inputTitle: string;
  @Input() allOptions: Array<string>;
  @Output() onChangeOptions = new EventEmitter<Array<string>>;

  @ViewChild('optionInput') optionInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredOptions = this.oprtionCtrl.valueChanges.pipe(
      startWith(null),
      map((option: string | null) => (option ? this._filter(option) : this.allOptions.slice())),
    );
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our option
    if (value && !this.options.includes(value)) {
      this.options.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.oprtionCtrl.setValue(null);
  }

  public remove(option: string): void {
    const index = this.options.indexOf(option);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
    this.onChangeOptions.emit(this.options);
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.options.includes(event.option.viewValue)){
      this.options.push(event.option.viewValue);
      this.onChangeOptions.emit(this.options);
    }
    this.optionInput.nativeElement.value = '';
    this.oprtionCtrl.setValue(null);
  }

  private _filter(value: string): Array<string> {
    const filterValue = value.toLowerCase();

    return this.allOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
  }

}
