import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  _user: Object;
  _platform: String;
  _showWarning: Boolean;

  constructor(
    private _httpService: HttpService,
    private _authService: AuthService,
  ) { }

  ngOnInit() {
    this._showWarning = true;
    this._httpService.getUserInfo(this._authService._loggedInUserId).subscribe((user) => {
      this._user = user['user'][0];
      this._user['password'] = null;
      if (this._user['races'].length > 0) {
        this._showWarning = false;
      }
    });
  }
}
