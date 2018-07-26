import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-stats',
  templateUrl: './personal-stats.component.html',
  styleUrls: ['./personal-stats.component.scss']
})
export class PersonalStatsComponent implements OnInit {
  _user: Object;
  _userRaces: any;
  _userTotalWins: any;
  _userBestCourse: any;
  _userMostPopularCourse: any;


  constructor(
    private _httpService: HttpService,
    private _authService: AuthService,
  ) { }

  ngOnInit() {
    this._userTotalWins = 0;

    this._httpService.getUserInfo(this._authService._loggedInUserId).subscribe((user) => {
      this._user = user['user'][0];
      this._user['password'] = null;
      this._userRaces = user['user'][0]['races'];
      this.winCounter();
      this.bestCourseCalculator();
      this.getMostPopularCourse();
    });

  }

  winCounter() {
    this._userTotalWins = 0;
    for (let i = 0; i < this._userRaces.length; i++) {
      if (this._userRaces[i]['winner'] === this._authService._loggedInUserScreenname) {
        this._userTotalWins++;
      }
    }
  }

  bestCourseCalculator() {
    let temp = {};

    for (let i = 0; i < this._userRaces.length; i++) {
      if (this._userRaces[i]['winner'] === this._authService._loggedInUserScreenname) {
        temp[this._userRaces[i]['course']] ? temp[this._userRaces[i]['course']]++ : temp[this._userRaces[i]['course']] = 1;
      }
    }

    if (this._userTotalWins > 0) {
      this._userBestCourse = Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b);
    } else {
      this._userBestCourse = 'N/A';
    }
  }

  getMostPopularCourse() {
    let temp = {};
    for (let i = 0; i < this._userRaces.length; i++) {
      temp[this._userRaces[i]['course']] ? temp[this._userRaces[i]['course']]++
      : temp[this._userRaces[i]['course']] = 1;

      this._userMostPopularCourse = Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b);
    }
  }


}
