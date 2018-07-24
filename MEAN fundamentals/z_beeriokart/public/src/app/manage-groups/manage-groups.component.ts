import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent implements OnInit {
  _user: Object;

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
