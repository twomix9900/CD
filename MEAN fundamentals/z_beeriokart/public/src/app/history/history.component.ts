import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  _user: Object;
  _platform: String;

  constructor(
    private _httpService: HttpService,
    private _authService: AuthService,
  ) { }

  ngOnInit() {
    console.log(this._authService._loggedInUserId);
    let userObs = this._httpService.getUserInfo(this._authService._loggedInUserId);
    userObs.subscribe((user) => {
      console.log('Got user back from DB', user);
      this._user = user['user'][0];
      console.log(user['user'][0]);
    });
  }
}
