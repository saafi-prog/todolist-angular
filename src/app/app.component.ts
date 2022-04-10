import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "#todo";

  public items:string[];
  public item:string;

  constructor() {
    this.items=[];
    this.item='';
  }
public addToList(myForm:any) {
  console.log(myForm.value.addDetails);
  if (myForm.value.addDetails!="")
      this.items.push (myForm.value.addDetails);       
      }
    }

