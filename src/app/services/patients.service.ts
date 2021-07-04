import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPatient} from '../overview/shared/dto/IPatient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  url = 'http://localhost:3000/server';
  page = 0;
  sort = '';
  order = '';
  patients: IPatient[];
  totalPatientsAmount: number;
  patientsPerPage: number = 9;
  patientsFilterString = '';
  averageReplyTimeFilterString = '';

  constructor(private http: HttpClient) {
    this.getPatients();
  }

  set filterString(str: string) {
    this.patientsFilterString = str;
  }

  get filterString() {
    return this.patientsFilterString;
  }

  set Sort(str: string) {
    this.sort = str;
  }

  set Order(str: string) {
    this.order = str;
  }

  getPatients(): any {
    this.http.get(`${this.url}?_page=${this.page}&_limit=${this.patientsPerPage}${this.sort}${this.order}${this.patientsFilterString}${this.averageReplyTimeFilterString}`, {observe: 'response'}).subscribe((value: any) => {
      this.patients = value.body;
      this.totalPatientsAmount = value.headers.get('X-Total-Count');
    });

  }
}
