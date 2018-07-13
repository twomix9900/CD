import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _tasksArr:any[];

  constructor(private _httpService: HttpService, private _http: HttpClient ){
    // generally constructor is reserved for dependency injections
  };

  ngOnInit() {
    // this runs right after constructor, you must import { OnInit } from @angular/core and also change export class to export class AppComponent implements OnInit
    this.getTasksFromService()
  };

  getTasksFromService() {
    let tempTasksObservable = this._httpService.getTasks();
    tempTasksObservable.subscribe((data) => {
      console.log("Got our tasks from local DB!", data);
      this._tasksArr = data.tasks;
    });
  };
}