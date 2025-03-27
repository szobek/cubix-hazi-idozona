import { Component } from '@angular/core';
import { TimeZoneComponent } from './time-zone/time-zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimeZoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  timeZoneString: string = '';
timezones: string[] = [
  'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'America/Martinique',
    'Europe/Malta',
    'Indian/Mauritius',
    'Indian/Maldives',
    'Africa/Blantyre',
    'America/Moncton',
    'America/Goose_Bay',
    'America/Blanc-Sablon',
    'America/Toronto',
    'America/Nipigon',
    'America/Thunder_Bay',
    'America/Iqaluit',
    'America/Pangnirtung',
    'America/Resolute',
    'America/Atikokan',
    'America/Rankin_Inlet',
    'America/Winnipeg',
    'America/Rainy_River',
    'America/Cambridge_Bay',
    'America/Regina',
    'America/Swift_Current',
    'America/Edmonton',
    'America/Yellowknife',
    'America/Inuvik',
    'America/Dawson_Creek',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Dawson',
    'Indian/Cocos',
    'Europe/Zurich',
    'Africa/Abidjan',
    'Pacific/Rarotonga',
    'America/Santiago',
    'America/Punta_Arenas',
    'Pacific/Easter',
    'Asia/Shanghai',
    'Asia/Urumqi',
    'America/Bogota',
    'America/Costa_Rica',
    'America/Havana',
    'Atlantic/Cape_Verde',
    'America/Curacao',
    'Indian/Christmas',
    'Asia/Nicosia',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'America/Santo_Domingo',
    'Africa/Algiers',
    'America/Guayaquil',
    'Pacific/Galapagos',
];
setTimeZone(timeZone: string) {
  console.log(timeZone);
  this.timeZoneString = timeZone;
}  
}
