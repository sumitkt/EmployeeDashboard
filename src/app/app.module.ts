import { NgModule } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';


import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import modules
import { HttpClientModule } from '@angular/common/http';
import { EmpDashComponent } from './EmpDash/EmpDash.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { NgxMultipleDatesModule } from 'ngx-multiple-dates';
import { RaiseRequestComponent } from './raise-request/raise-request.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { /*MAT_DATE_LOCALE,*/  MatRippleModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [		
    AppComponent,
      EmpDashComponent,
      RaiseRequestComponent,
      CalendarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDatepickerModule,
    MatIconModule,
    MatChipsModule,
    NgbModule,
    MatFormFieldModule,
    NgxMultipleDatesModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}