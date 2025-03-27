import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-time-zone',
  imports: [CommonModule],
  templateUrl: './time-zone.component.html',
  styleUrl: './time-zone.component.scss',
})
export class TimeZoneComponent {
  @Input() timeZoneString: string = '';
  @Input() disabledBtn: boolean = false;
  @Output() changeTimeZone: EventEmitter<string> = new EventEmitter<string>();
  
  currentTimeZone: boolean = false;
  dateTime?: string;
  setTimeZone() {
    this.dateTime = new Date().toLocaleString('en-US', {
      timeZone: this.timeZoneString,
    });
  }

  setCurrentTimeZone() {
    this.changeTimeZone.emit(this.timeZoneString);
    // this.currentTimeZone = (this.timeZoneString);
  }
}
