import { Component, OnInit } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
     
export class AppComponent implements OnInit {
  num: number;
  randNum: number;
  str: string;
  first_name: string;
     
  ngOnInit() {
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
  }
}   


export class AppComponent implements OnInit {
  snacks: string[];
  loggedIn: boolean;
     
  ngOnInit() {
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
  }
}   
