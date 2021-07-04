import {NgModule} from '@angular/core';
import {OmniBarModule} from './omni-bar/omni-bar.module';
import {OverviewComponent} from './overview.component';
import { ChartComponent } from './patient-card/chart/chart.component';
import {PatientCardComponent} from './patient-card/patient-card.component';
import {ChartModule} from 'primeng';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
  OverviewComponent,
  PatientCardComponent,
  ChartComponent
  ],
  imports: [
    OmniBarModule,
    ChartModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  exports: [OverviewComponent, ChartComponent]
})
export class OverviewModule { }
