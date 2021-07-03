import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {filteringFieldTypes} from "../../shared/enum/filteringFieldTypes";
import {PatientsService} from "../../../services/patients.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() resetDataManipulation = new EventEmitter<any>();
  filterString: string;
  prevFilterField: string;
  filteringPatientKeys = [];
  selectedFilter: filteringFieldTypes;

  constructor(public patientsService: PatientsService) {
    this.filteringPatientKeys = Object.keys(filteringFieldTypes);
  }
  filter(category: filteringFieldTypes) {
    this.resetDataManipulation.emit();
    if (this.prevFilterField !== category) {
      this.prevFilterField = category;
      this.patientsService.flterString = `&${category}=${this.filterString}`
    }
    this.patientsService.updatePatients();
  }


  clearFilter() {
    this.resetDataManipulation.emit();
    this.prevFilterField = undefined;
    this.patientsService.flterString = '';
    this.filterString = '';
    this.patientsService.updatePatients();
  }



  FilteringFieldType(key: any) {
    return filteringFieldTypes[key];
  }

}
