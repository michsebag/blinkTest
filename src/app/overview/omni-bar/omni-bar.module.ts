import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OmniBarComponent} from './omni-bar.component';
import {OptionsFilterComponent} from './options-filter/options-filter.component';
import {SortComponent} from './sort/sort.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { DurationInputComponent } from './options-filter/duration-input/duration-input.component';
import { MultiValueInputComponent } from './options-filter/multi-value-input/multi-value-input.component';


@NgModule({
  declarations: [
    OmniBarComponent,
    OptionsFilterComponent,
    SortComponent,
    SearchComponent,
    DurationInputComponent,
    MultiValueInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  exports: [
    OptionsFilterComponent,
    SortComponent,
    SearchComponent,
    OmniBarComponent,
    DurationInputComponent
  ]
})
export class OmniBarModule { }
