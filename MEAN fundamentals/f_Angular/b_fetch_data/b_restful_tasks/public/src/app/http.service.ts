import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  id: string;

  constructor(private _http: HttpClient) {
  };

  getTasks() {
    return this._http.get('/tasks');
  };

  addTask(newTask){
    return this._http.post('/new/', newTask);
  };

  deleteTask(taskId){
    return this._http.delete('/remove/' + taskId);
  };

  editTask(task){
    return this._http.put('/update/' + task._id, task);
  }

}
