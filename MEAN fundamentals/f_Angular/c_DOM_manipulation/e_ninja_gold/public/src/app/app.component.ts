import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient, HttpParams } from '@angular/common/http';
const params = new HttpParams()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _gold:number;
  _id:string;
  _events:any[];

  constructor(private _httpService: HttpService, private _http: HttpClient ){
    // generally constructor is reserved for dependency injections
  };

  ngOnInit() {
    // this runs right after constructor, you must import { OnInit } from @angular/core and also change export class to export class AppComponent implements OnInit
    this.reset();
  };

  reset() {
    let goldObservable = this._httpService.reset();
    goldObservable.subscribe((data) => {
      console.log("Got data back for reset", data);
      this._id = data.session._id;
      this._gold = data.session.gold;
      this._httpService.id = data.session._id;
      this._events = [];
    })
  };

  farm() {
    let goldObservable = this._httpService.farm();
    goldObservable.subscribe((data) => {
      console.log("Got data back for farm", data);
      this._gold = data.updatedSession.gold;
      this._events.push('You earned ' + data.goldFromFarm + ' gold at the farm.')
    })
  };

  cave() {
    let goldObservable = this._httpService.cave();
    goldObservable.subscribe((data) => {
      console.log("Got data back for cave", data);
      this._gold = data.updatedSession.gold;
      this._events.push('You earned ' + data.goldFromCave + ' gold at the cave.')
    })
  };

  house() {
    let goldObservable = this._httpService.house();
    goldObservable.subscribe((data) => {
      console.log("Got data back for house", data);
      this._gold = data.updatedSession.gold;
      this._events.push('You earned ' + data.goldFromHouse + ' gold at the house.')
    })
  };

  casino() {
    let goldObservable = this._httpService.casino();
    goldObservable.subscribe((data) => {
      console.log("Got data back for casino", data);
      this._gold = data.updatedSession.gold;
      data.goldFromCasino < 0 ? this._events.push('You lost ' + -data.goldFromCasino + ' gold at the casino.') : this._events.push('You earned ' + data.goldFromCasino + ' gold at the casino.')
    })
  };
}