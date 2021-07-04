import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  @ViewChild('secondsInput', { static: true }) secondsElementRef: ElementRef;
  @ViewChild('minutesInput', { static: true }) minutesElementRef: ElementRef;
  @ViewChild('hoursInput', { static: true }) hoursElementRef: ElementRef;

  private isFocus: boolean = false;
  private isHoursFocus: boolean = false;
  private isMinutesFocus: boolean = false;
  private isSecondsFocus: boolean = false;

  hoursString: string;
  minutesString: string;
  secondsString: string;

  @Input() time: number;
  @Output() timeChange = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }
  onClickTextBoxOutSideCell() {
    this.selectInput(this.hoursElementRef);
  }

  onFocus() {
    this.isFocus = true;
  }
  onHoursFocusIn() {
    this.isHoursFocus = true;
  }

  onMinutesFocusIn() {
    this.isMinutesFocus = true;
  }

  onSecondsFocusIn() {
    this.isSecondsFocus = true;
  }
  onHoursFocusOut(event: any) {
    this.StopEventIfStayedInsideDuration(event);
    this.isHoursFocus = false;
    this.time = this.getTimeInSecondsFromInputs();
  }

  private StopEventIfStayedInsideDuration(event: any) {
    if (event.relatedTarget &&
      event.relatedTarget.className.toString().includes('duration-input')) {
      event.stopPropagation();
    }
  }

  onMinutesFocusOut(event: any) {
    this.StopEventIfStayedInsideDuration(event);
    this.isMinutesFocus = false;
    this.time = this.getTimeInSecondsFromInputs();
  }

  private getTimeInSecondsFromInputs() {
    let calculatedTime = this.getHoursDataInSeconds()
      + this.getMinutesDataInSeconds() + this.getSecondsDataInSeconds();
    this.timeChange.emit(calculatedTime);
    return calculatedTime;
  }

  private getSecondsDataInSeconds() {
    return this.secondsString ? Number(this.secondsString) : 0;
  }

  private getMinutesDataInSeconds() {
    return this.minutesString ? Number(this.minutesString) * 60 : 0;
  }

  private getHoursDataInSeconds() {
    return this.hoursString ? Number(this.hoursString) * 60 * 60 : 0;
  }

  onSecondsFocusOut(event: any) {
    this.StopEventIfStayedInsideDuration(event);
    this.isSecondsFocus = false;
    this.time = this.getTimeInSecondsFromInputs();
  }
  onClick(event: MouseEvent, type: string) {
    event.stopPropagation();
    if (type === 'hours') {
      this.selectInput(this.hoursElementRef);
    } else if (type === 'minutes') {
      this.selectInput(this.minutesElementRef);
    } else if (type === 'seconds') {
      this.selectInput(this.secondsElementRef);
    }
  }
  private selectInput(nextInputElementRef: ElementRef) {
    setTimeout(() => nextInputElementRef.nativeElement.select(), 0);
  }
  getValidValue(value, max): string {
    let newValue: number;
    if (/^\d+$/.test(value)) {
      newValue = parseInt(value);
      newValue = Math.max(0, newValue);
      newValue = Math.min(max, newValue);
      if (newValue < 10) {
        return String('0' + newValue);
      }
      return String(newValue);
    } else {
      return String();
    }
  }

  validateDuration(event: any) {
    let validValue= this.getValidValue(event,99);
    this.hoursString = validValue;
  }
}
