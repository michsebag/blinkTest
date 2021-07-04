import {Component} from '@angular/core';
import {PatientsService} from '../services/patients.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent{

  constructor(public patientsServiceService: PatientsService) { }

  pageChange(event: number) {
    this.patientsServiceService.page = event;
    this.patientsServiceService.getPatients();
  }
}
