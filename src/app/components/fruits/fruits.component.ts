import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit
{
  fruit:string = 'Durian';
  fullName:string = "Darryl";
  fontWeight:string = '3';
  fontSize:string='xx-large';
  testClick()
  {
    console.log("Button test clicked");
  }
  fruits: [{name:string, quantity:number}] = [{name:"orange", quantity:20}]

  ngOnInit(): void
  {
    this.fruits.push({name:"mango", quantity:10});
    this.fruits.push({name:"durian", quantity:10});
    this.fruits.push({name:"apple", quantity:11});
  }
}
