import { Component, ViewChild} from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.css']
})
export class MycalendarComponent {
  CurrTitle='';
  NewTitle='';
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  Events = [
    {
        "title": "B",
        "start": "2022-01-01"
    },
    {
        "title": "B",
        "start": "2022-01-02"
    },
    {
        "title": "O",
        "start": "2022-01-03"
    },
    {
        "title": "O",
        "start": "2022-01-04"
    },
    {
        "title": "B",
        "start": "2022-01-05"
    },
    {
        "title": "B",
        "start": "2022-01-06"
    },
    {
        "title": "B",
        "start": "2022-01-07"
    },
    {
        "title": "B",
        "start": "2022-01-08"
    },
    {
        "title": "B",
        "start": "2022-01-09"
    },
    {
        "title": "O",
        "start": "2022-01-10"
    },
    {
        "title": "O",
        "start": "2022-01-11"
    },
    {
        "title": "B",
        "start": "2022-01-12"
    },
    {
        "title": "B",
        "start": "2022-01-13"
    },
    {
        "title": "B",
        "start": "2022-01-14"
    },
    {
        "title": "B",
        "start": "2022-01-15"
    },
    {
        "title": "B",
        "start": "2022-01-16"
    },
    {
        "title": "O",
        "start": "2022-01-17"
    },
    {
        "title": "O",
        "start": "2022-01-18"
    },
    {
        "title": "B",
        "start": "2022-01-19"
    },
    {
        "title": "B",
        "start": "2022-01-20"
    },
    {
        "title": "B",
        "start": "2022-01-21"
    },
    {
        "title": "B",
        "start": "2022-01-22"
    },
    {
        "title": "B",
        "start": "2022-01-23"
    },
    {
        "title": "O",
        "start": "2022-01-24"
    },
    {
        "title": "O",
        "start": "2022-01-25"
    },
    {
        "title": "B",
        "start": "2022-01-26"
    },
    {
        "title": "B",
        "start": "2022-01-27"
    },
    {
        "title": "B",
        "start": "2022-01-28"
    },
    {
        "title": "B",
        "start": "2022-01-29"
    },
    {
        "title": "B",
        "start": "2022-01-30"
    },
    {
        "title": "O",
        "start": "2022-01-31"
    },
    {
      "title": "A",
      "start": "2022-01-31"
  }
];

  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  
  calendarOptions!: CalendarOptions;
    constructor() { }
   
    ngOnInit(){
      this.calendarOptions = {
        
            initialView: 'dayGridMonth',
            events: this.Events
          };
      this.CurrTitle = (this.months[(new Date().getMonth())]).toString() + ' ' + new Date().getFullYear().toString();
        
    }   
  
    sendDay() {
      this.NewTitle=this.calendarComponent.calendar.currentData.viewTitle;
      if(this.CurrTitle!=this.NewTitle){
        this.CurrTitle=this.NewTitle;
        console.log(this.CurrTitle);

      //   console.log(
      //     document.querySelector("body > app-root > div > full-calendar > div.fc-header-toolbar.fc-toolbar > div:nth-child(3) > div > button.fc-prev-button.fc-button.fc-button-primary"))
     }
    }
}