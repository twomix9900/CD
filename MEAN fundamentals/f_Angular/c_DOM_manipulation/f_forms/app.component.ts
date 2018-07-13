import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  constructor() { } 
     
  ngOnInit() {
    this.newTask = { title: "", description: "" }
  }
     
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
  }
}
