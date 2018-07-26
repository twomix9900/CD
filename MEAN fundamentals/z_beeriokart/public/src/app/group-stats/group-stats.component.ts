import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-group-stats',
  templateUrl: './group-stats.component.html',
  styleUrls: ['./group-stats.component.scss']
})
export class GroupStatsComponent implements OnInit {
  _userGroups: any [];
  _userId: String;
  _userScreenName: String;
  _formattedUserGroups: any;
  _selectedGroupId: any;
  _selectedGroupIdx: any;
  _selectedGroupInfo: any;
  _groupBestPerformer: any;
  _groupMostPopularCourse: any;
  _groupBestPerformerCourse: any;

  constructor(
    private _httpService: HttpService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._formattedUserGroups = [];
    this._httpService.getUserInfo(this._authService._loggedInUserId).subscribe((user) => {
      this._userScreenName = user['user'][0]['screenName'];
      this._userGroups = user['user'][0]['groups'];
      this._userId = user['user'][0]['_id'];
      this.groupFormatter();
    });
  }

  groupFormatter() {
    for (let i = 0; i < this._userGroups.length; i++) {
      let temp = this._userGroups[i]['users'];
      let temp2 = temp.length === 1 ? temp[0] : [ temp.slice(0, temp.length - 1).
        join(', '), temp[temp.length - 1] ].join(' and ');
      this._formattedUserGroups.push(temp2);
    }
  }

  setGroup() {
    this._selectedGroupId = this._userGroups[this._selectedGroupIdx]['_id'];
    this._httpService.getGroupInfoFromRaces(this._selectedGroupId).subscribe((group) => {
      if (group['error']) {
        console.log('error!', group['error']);
      } else {
        this._selectedGroupInfo = group['races'];
        this.getGroupBestPerformer();
        this.getGroupMostPopularCourse();
        this.getGroupBestPerformerCourse();
      }
    });
  }

  getGroupBestPerformer() {
    if (this._selectedGroupInfo.length > 0) {
      let temp = {};
      for (let i = 0; i < this._selectedGroupInfo.length; i++) {
        temp[this._selectedGroupInfo[i]['winner']] ? temp[this._selectedGroupInfo[i]['winner']]++
        : temp[this._selectedGroupInfo[i]['winner']] = 1;
      }
      this._groupBestPerformer = Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b);
    }
  }

  getGroupMostPopularCourse() {
    if (this._selectedGroupInfo.length > 0) {
      let temp = {};
      for (let i = 0; i < this._selectedGroupInfo.length; i++) {
        temp[this._selectedGroupInfo[i]['course']] ? temp[this._selectedGroupInfo[i]['course']]++
        : temp[this._selectedGroupInfo[i]['course']] = 1;
      }
      this._groupMostPopularCourse = Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b);
    }
  }

  getGroupBestPerformerCourse() {
    if (this._selectedGroupInfo.length > 0) {
      let temp = {};
      for (let i = 0; i < this._selectedGroupInfo.length; i++) {
        if (this._selectedGroupInfo[i]['winner'] === this._groupBestPerformer) {
          temp[this._selectedGroupInfo[i]['course']] ? temp[this._selectedGroupInfo[i]['course']]++
          : temp[this._selectedGroupInfo[i]['course']] = 1;
        }
      }
      this._groupBestPerformerCourse = Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b);
    }
  }

}
