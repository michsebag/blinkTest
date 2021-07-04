import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'options-filter',
  templateUrl: './options-filter.component.html',
  styleUrls: ['./options-filter.component.scss']
})
export class OptionsFilterComponent implements OnInit {
  @Input() label: string;
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<any>();
  @Input() keys: any;
  @Input() Types: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectionChange(event: MatSelectChange) {
    this.selectedChange.emit((this.selected));
  }
}
