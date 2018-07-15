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

  addReview(cake) {
    return this._http.post('/cake/review/add/' + cake.id, cake);
  };

  getAllCakes() {
    return this._http.get('/cakes');
  };



  // getTasks() {
  //   return this._http.get('/tasks');
  // };

}
