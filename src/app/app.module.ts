import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {OverviewComponent} from './overview/overview.component';
import {PatientCardComponent} from './overview/patient-card/patient-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { OmniBarComponent } from './overview/omni-bar/omni-bar.component';
import {NgxPaginationModule} from "ngx-pagination";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { OptionsFilterComponent } from './overview/omni-bar/options-filter/options-filter.component';
import { SortComponent } from './overview/omni-bar/sort/sort.component';
import { SearchComponent } from './overview/omni-bar/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    PatientCardComponent,
    OmniBarComponent,
    OptionsFilterComponent,
    SortComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
