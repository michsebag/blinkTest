import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../services/patients.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  page: number = 1;

  constructor(public patientsServiceService: PatientsService) { }

  ngOnInit(): void {
  }

  pageChange(event: number) {
    console.log('event: ', event);
    this.patientsServiceService.page = event;
    this.patientsServiceService.updatePatients();
  }
}
