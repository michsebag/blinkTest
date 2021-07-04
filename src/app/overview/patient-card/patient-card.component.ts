import {Component, Input, OnInit} from '@angular/core';
import {IPatient} from "../shared/dto/IPatient";

@Component({
  selector: 'patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit{

  @Input() patient: IPatient;
  offersData: any;

  ngOnInit(): void {
    this.offersData = {
      labels: ['Accepted offers', 'Canceled offers'],
      datasets: [
        {
          label: 'Offers',
          data: [this.patient.acceptedOffers, this.patient.canceledOffers],
          backgroundColor: ['green', 'grey'],
        }
      ]
    }
  }
  call(name: string) {
    window.alert(`Calling: ${name}`);
  }


}
