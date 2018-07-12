import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  };

  reset() {
    return this._http.post('/reset/');
  };

  farm(id) {
    console.log('id in service = ', id)
    return this._http.put('/farm/:' + id);
  };

  cave(id) {
    return this._http.put('/cave/:' + id);
  };

  house(id) {
    return this._http.put('/house/:' + id);
  };
  
  casino(id) {
    return this._http.put('/casino/:' + id);
  };

}
