import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  _weatherData?: object;
  _city = 'chicago';
  constructor(
    private _httpService: HttpService, private _http: HttpClient
  ) {}

  ngOnInit() {
    this.getWeatherData(this._city);
  }

  getWeatherData(city) {
    console.log('getWeatherData invoked');
    let weatherObservable = this._httpService.getWeatherData(city);
    weatherObservable.subscribe((data) => {
      console.log("Got weather data from the API", data);
      this._weatherData = data;
    });
  }
}
