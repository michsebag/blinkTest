import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'multi-value-input',
  templateUrl: './multi-value-input.component.html',
  styleUrls: ['./multi-value-input.component.scss']
})
export class MultiValueInputComponent {
  @Input() label: string;
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<any>();
  @Input() itemList: any[];

  onSelectionChange(event: MatSelectChange) {
    this.selectedChange.emit((this.selected));
  }
}
