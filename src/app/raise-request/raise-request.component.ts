import { Component, OnInit } from '@angular/core';
import { DateClass } from 'ngx-multiple-dates';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-raise-request',
  templateUrl: './raise-request.component.html',
  styleUrls: ['./raise-request.component.css']
})
export class RaiseRequestComponent implements OnInit {
  public modelWithToggleButton: Date[]=[];
  public subject:string='';
  public reason:string='';
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    let myDates=[]
    for(let i=0;i< this.modelWithToggleButton.length; i++){
      myDates.push(JSON.stringify(new Date(this.modelWithToggleButton[i])).slice(1,11))

    }
    
    console.log("MyDates:",myDates);
    console.log("Subject:",this.subject);
    console.log("Reason:",this.reason);
  }
  onCancel(){
    this.subject='';
    this.reason='';
    this.modelWithToggleButton=[];
  }

}
