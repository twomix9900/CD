import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _tasks: object;
  _tasksArr:any[];
  _showTasks:boolean = false;
  _showTaskDetails:boolean = false;
  _taskDetails:object;
  _newTask:object;
  _showEditPane:boolean = false;

  constructor(private _httpService: HttpService, private _http: HttpClient ){
    // generally constructor is reserved for dependency injections
  };

  ngOnInit() {
    // this runs right after constructor, you must import { OnInit } from @angular/core and also change export class to export class AppComponent implements OnInit
    this._newTask = { title: "", description: "" }
  };

  getTasksFromService() {
    this._showTasks = true;
    let tempTasksObservable = this._httpService.getTasks();
    tempTasksObservable.subscribe((data) => {
      console.log("Got our tasks from local DB!", data);
      this._tasks = data;
      this._tasksArr = data.tasks;
      console.log("Putting data into this.tasks ::: ", this._tasks)
    });
  };

  showTaskDetails(task: object) {
    console.log('task from html = ', task);
    this._showTaskDetails = true;
    this._taskDetails = task;
  };

  onSubmit() {
    let tempTaskObservable = this._httpService.addTask(this._newTask);
    tempTaskObservable.subscribe((data) => {
      console.log("Got the new task back from DB!", data);
      this._newTask = { title: "", description: "" };
    })
  };

  deleteTask(taskId) {
    console.log(taskId)
    let tempTaskObservable = this._httpService.deleteTask(taskId);
    tempTaskObservable.subscribe((data) => {
      console.log("Got the new task back from DB!", data);
      this.getTasksFromService();
    })
  }

  showEditTaskPane() {
    this._showEditPane = true;
  }

  submitEditTask(task) {
    console.log('task in submitedittask before being sent to db:', task)
    let tempTaskObservable = this._httpService.editTask(task);
    tempTaskObservable.subscribe((data) => {
      console.log("submitEditTask data from DB:", data);
      this._showEditPane = false;
      this.getTasksFromService();
    })
  }

}