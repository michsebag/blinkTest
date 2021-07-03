import {Component, Input, OnInit} from '@angular/core';
import {IPatient} from "../shared/dto/IPatient";

@Component({
  selector: 'patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent {

  @Input() patient: IPatient;

  call(name: string) {
    window.alert(`Calling: ${name}`);
  }
}
