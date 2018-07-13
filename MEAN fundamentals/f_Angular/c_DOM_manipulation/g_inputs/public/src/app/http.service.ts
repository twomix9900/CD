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

}
