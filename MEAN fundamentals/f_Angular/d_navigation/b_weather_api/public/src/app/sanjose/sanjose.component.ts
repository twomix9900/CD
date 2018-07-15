import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanJoseComponent implements OnInit {
  _weatherData: object;
  _city = 'san jose';
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
