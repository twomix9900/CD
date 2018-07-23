import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _user: Object;
  constructor(private _http: HttpClient) {
  }

  login(user: Object) {
    return this._http.post('/loginuser', user);
  }


}
