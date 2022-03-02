import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  shifts = ['A', 'B', 'C', 'M', 'E', 'I', 'L', null];
  month!: string;
  today!: string;
  monthIdx!: number;

  getCurMonth() {
    var d = new Date();
    this.monthIdx = d.getMonth();
    this.month = this.months[this.monthIdx];
    this.today = this.month;
  }

  getDates() {
    var dates = Array();
    var week = Array();
    for(let i = 0; i < 6; i++) {
      for(let j = 0; j < 7; j++) {
        week.push([j, this.shifts[Math.floor(Math.random() * 8)]]);
      }
      week = [];
      dates.push(week);
    }
    console.log(dates);
    return dates;
  }

  nextMonth() {
    this.monthIdx = (this.monthIdx + 1)%12;
    this.month = this.months[this.monthIdx];
  }

  prevMonth() {
    this.monthIdx = (this.monthIdx - 1)%12;
    if(this.monthIdx < 0)
      this.monthIdx = 11;
    this.month = this.months[this.monthIdx];
  }

  constructor() {
    this.getCurMonth();
   }

  ngOnInit(): void {
  }

}
