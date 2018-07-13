import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public id: string;

  constructor(private _http: HttpClient) {
  };

  reset() {
    return this._http.post('/reset/');
  };

  farm() {
    return this._http.put('/farm/' + this.id);
  };

  cave() {
    return this._http.put('/cave/' + this.id);
  };

  house() {
    return this._http.put('/house/' + this.id);
  };
  
  casino() {
    return this._http.put('/casino/' + this.id);
  };

}
