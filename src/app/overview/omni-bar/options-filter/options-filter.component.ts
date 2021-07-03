import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'options-filter',
  templateUrl: './options-filter.component.html',
  styleUrls: ['./options-filter.component.scss']
})
export class OptionsFilterComponent implements OnInit {
  @Input() label: string;
  @Input() selectedSort: any;
  @Output() selectedSortChange = new EventEmitter<any>();
  @Input() sortingKeys: any;
  @Input() SortingTypes: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectionChange(event: MatSelectChange) {
    console.log('event: ', event);
    console.log('this.selectedSort: ', this.selectedSort);
    this.selectedSortChange.emit((this.selectedSort));
  }
}
