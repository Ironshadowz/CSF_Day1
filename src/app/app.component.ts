import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_01Aug';
  updatedNumber:number;
  leftEnabled:boolean = true;
  rightEnabled:boolean = true;
  changeNumber(eventNumber:number)
  {
    this.updatedNumber=eventNumber;
    console.log("Parent number: "+this.updatedNumber);
  }
  ToggleLeft()
  {
    this.leftEnabled=!this.leftEnabled;
  }
  ToggleRight()
  {
    this.rightEnabled=!this.rightEnabled;
  }
}
