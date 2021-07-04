import {Component, EventEmitter, Output} from '@angular/core';
import {filteringFieldTypes} from '../../shared/enum/filteringFieldTypes';
import {PatientsService} from '../../../services/patients.service';
import {getInputFieldType, inputFieldTypes} from '../../shared/enum/inputFieldTypes';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() resetDataManipulation = new EventEmitter<any>();
  filterString: string;
  filterStringMulti: any[];
  prevFilterField: string;
  filteringPatientKeys = [];
  selectedFilter: filteringFieldTypes;
  time: number;
  public selectedFieldType: inputFieldTypes;
  ages = ['0-17','18-34','35-59','60+'];
  maxAge = '130';

  constructor(public patientsService: PatientsService) {
    this.filteringPatientKeys = Object.keys(filteringFieldTypes);
  }

  filter(category: filteringFieldTypes) {
    this.resetDataManipulation.emit();
    if (this.prevFilterField !== category) {
      this.prevFilterField = category;
    }
    let filterValue = this.selectedFieldType === this.getFilteringFieldType.duration ? this.time : this.filterString;
    if (this.selectedFieldType === this.getFilteringFieldType.multi) {
      this.patientsService.filterString = '';
      this.filterStringMulti.forEach((value) => {
        let edges = value.replace('+', `-${this.maxAge}`).split('-');
        let min = Number(edges[0]);
        let max = Number(edges[1]);
        for(let i=min; i<= max; i++){
          this.patientsService.filterString += (`&${category}=${i}`);
        }
      })
    } else {
      this.patientsService.filterString = `&${category}=${filterValue}`
    }
    this.patientsService.getPatients();
  }


  clearFilter() {
    this.resetDataManipulation.emit();
    this.prevFilterField = undefined;
    this.patientsService.filterString = '';
    this.filterString = '';
    this.patientsService.getPatients();
  }


  FilteringFieldType(key: any) {
    return filteringFieldTypes[key];
  }

  public get getFilteringFieldType(): typeof inputFieldTypes {
    return inputFieldTypes;
  }

  updateInput(event: any) {
    this.selectedFieldType = getInputFieldType(event);

  }
}
