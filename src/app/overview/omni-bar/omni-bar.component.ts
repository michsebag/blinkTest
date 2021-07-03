import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../services/patients.service';
import {filteringFieldTypes} from '../shared/enum/filteringFieldTypes';

@Component({
  selector: 'omni-bar',
  templateUrl: './omni-bar.component.html',
  styleUrls: ['./omni-bar.component.scss']
})
export class OmniBarComponent{


  constructor(public patientsService: PatientsService) {
  }

  public resetDataManipulation() {
    this.patientsService.page = 0;
  }


}
