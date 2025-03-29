import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-zone',
  imports: [CommonModule,FormsModule],
  templateUrl: './time-zone.component.html',
  styleUrl: './time-zone.component.scss',
})
export class TimeZoneComponent {
  @Input() timeZoneString: string = '';
  @Input() disabledBtn: boolean = false;
  @Output() changeTimeZone: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  currentTimeZone: boolean = false;
  dateTime?: string;
  setTimeZone() {
    this.dateTime = new Date().toLocaleString('en-US', {
      timeZone: this.timeZoneString,
    });
  }

  setCurrentTimeZone() {
    this.changeTimeZone.emit(true);
  }
}
