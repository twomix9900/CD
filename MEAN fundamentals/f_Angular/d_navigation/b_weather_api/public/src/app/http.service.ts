import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getWeatherData(city) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?APPID=65b3f75e4f1bdf6f0c34371466363f53&q=' + city);
  }
  // getTasks() {
  //   return this._http.get('/tasks');
  // };

}
