import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // id: string;
  constructor(private _http: HttpClient) {
  };

  addCake(cake) {
    return this._http.post('/cake/add', cake);
  };

  getAllCakes() {
    console.log('hi')
    return this._http.get('/cakes');
  };

  // getTasks() {
  //   return this._http.get('/tasks');
  // };

}
