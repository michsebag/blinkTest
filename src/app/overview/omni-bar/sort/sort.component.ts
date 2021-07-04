import {Component, EventEmitter, Output} from '@angular/core';
import {sortingFieldTypes} from '../../shared/enum/sortingFieldTypes';
import {PatientsService} from '../../../services/patients.service';

@Component({
  selector: 'sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent{

  prevSortField: string;
  selectedSort: sortingFieldTypes;
  sortingPatientKeys = [];
  public isAsc = true;
  @Output() resetDataManipulation = new EventEmitter<any>();

  constructor(public patientsService: PatientsService) {
    this.sortingPatientKeys = Object.keys(sortingFieldTypes);
  }
  sort(category: sortingFieldTypes) {
    this.resetDataManipulation.emit();
    if (this.prevSortField !== category) {
      this.prevSortField = category;
      this.patientsService.Sort = `&_sort=${category}`;
      this.isAsc = true;
    } else {
      this.isAsc = !this.isAsc;
    }
    const newSort = this.isAsc ? 'asc' : 'desc';
    this.patientsService.Order = `&_order=${newSort}`;
    this.patientsService.getPatients();
  }

  clearSort() {
    this.resetDataManipulation.emit();
    this.prevSortField = undefined;
    this.patientsService.Sort = '';
    this.patientsService.Order = '';
    this.patientsService.getPatients();
  }
  SortingFieldTypes(key: any) {
    return sortingFieldTypes[key];
  }
}
