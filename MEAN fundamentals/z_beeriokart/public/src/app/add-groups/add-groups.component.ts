import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.scss']
})
export class AddGroupsComponent implements OnInit {
  _userId: String;
  _userScreenName: String;
  _groupId: String;
  _userGroups: any [];
  _tempGroupSize: any; // used to calculate for ngFor in html, not used otherwise
  _tempGroupArray: any []; // used to calculate for ngFor in html, not used otherwise
  _groupInfo: Object;
  _errorMessages: any [];
  _tempGroupUsersArray: any []; // this will be used to submit data to DB if all validators pass
  _groupSizeUpdated: Boolean;


  constructor(
    private _httpService: HttpService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getUserInfo(this._authService._loggedInUserId).subscribe((user) => {
      this._userScreenName = user['user'][0]['screenName'];
      this._userGroups = user['user'][0]['groups'];
      this._userId = user['user'][0]['_id'];
    });
    this._groupInfo = { 2: '', 3: '', 4: '', groupSize: '' };
    this._errorMessages = [];
    this._tempGroupUsersArray = [];
    this._groupSizeUpdated = false;
  }

  updateGroupSize() {
    this._tempGroupSize = this._groupInfo['groupSize'];
    this._tempGroupArray = Array(this._tempGroupSize).fill(0).map((x, i) => i);
    this._groupInfo[2] = '';
    this._groupInfo[3] = '';
    this._groupInfo[4] = '';
    this._groupSizeUpdated = true;
  }

  validateData() {
    this._errorMessages = [];

    if (this.groupSizeValidator()) {
      this.userValidator();
    }
  }

  groupSizeValidator() {
    this._tempGroupUsersArray = [this._userScreenName];
    if (this._groupInfo['groupSize'] === 3) {
      if (!this._groupInfo[2] || !this._groupInfo[3] || !this._groupInfo[4]) {
        this._errorMessages.push('Fill in all player name fields');
        return false;
      } else {
        this._tempGroupUsersArray.push(this._groupInfo[2]);
        this._tempGroupUsersArray.push(this._groupInfo[3]);
        this._tempGroupUsersArray.push(this._groupInfo[4]);
      }
    }

    if (this._groupInfo['groupSize'] === 2) {
      if (!this._groupInfo[2] || !this._groupInfo[3]) {
        this._errorMessages.push('Fill in all player name fields');
        return false;
      } else {
        this._tempGroupUsersArray.push(this._groupInfo[2]);
        this._tempGroupUsersArray.push(this._groupInfo[3]);
      }
    }

    if (this._groupInfo['groupSize'] === 1) {
      if (!this._groupInfo[2]) {
        this._errorMessages.push('Fill in the player name');
        return false;
      } else {
        this._tempGroupUsersArray.push(this._groupInfo[2]);
      }
    }

    return true;
  }

  userValidator() {
    let counter = 0;
    if (this._groupInfo[2] === this._userScreenName || this._groupInfo[3] === this._userScreenName || 
      this._groupInfo[4] === this._userScreenName) {
      this._errorMessages.push('You are already in the group! No need to add yourself ' + this._userScreenName);
      return false;
    } else {
      this._httpService.validateUser(this._groupInfo[2]).subscribe((data) => {
        if (data['error']) {
          console.log('user1 error');
          this._errorMessages.push(this._groupInfo[2] + ' is not a registered player');
          return false;
        } else {
          counter++;
          if (counter === 1 && this._groupInfo[3].length > 0) {
            this._httpService.validateUser(this._groupInfo[3]).subscribe((data) => {
              if (data['error']) {
                console.log('user 2 error');
                this._errorMessages.push(this._groupInfo[3] + ' is not a registered player');
                return false;
              } else {
                counter++;
                if (counter === 2 && this._groupInfo[4].length > 0) {
                  this._httpService.validateUser(this._groupInfo[4]).subscribe((data) => {
                    if (data['error']) {
                      console.log('user 3 error');
                      this._errorMessages.push(this._groupInfo[4] + ' is not a registered player');
                      return false;
                    } else {
                      this.submitNewGroup();
                    }
                  });
                } else {
                  this.submitNewGroup();
                }
              }
            });
          } else {
            this.submitNewGroup();
          }
        }
      });
    }
  }

  submitNewGroup() {
    this._errorMessages.push('Please wait...');
    this._httpService.initGroup().subscribe((data) => {
      if (data['err']) {
        this._errorMessages.push('DB error, initGroup');
      } else {
        let tempCounter = 0;
        this._groupId = data['group']['_id'];
        for (let i = 0; i < this._tempGroupUsersArray.length; i++) {
          this._httpService.addUserToGroup(this._groupId, this._tempGroupUsersArray[i]).subscribe((data) => {
            if (data['error']) {
              console.log('error adding user to group', data['error']);
              return false;
            } else {
              tempCounter++;
              if (tempCounter === this._tempGroupUsersArray.length) {
                let tempCounter2 = 0;
                for (let j = 0; j < this._tempGroupUsersArray.length; j++) {
                  // console.log(this._tempGroupUsersArray[j], '\n');
                  this._httpService.addGroupToUser(this._groupId, this._tempGroupUsersArray[j]).subscribe((data) => {
                    if (data['error']) {
                      console.log('error from DB', data['error']);
                      return;
                    } else {
                      tempCounter2++;
                      if (tempCounter2 === this._tempGroupUsersArray.length) {
                        this._router.navigateByUrl('add-races');
                        // this._router.navigateByUrl('add-groups');
                      }
                    }
                  });
                }
              }
            }
          });
        }
      }
    });
  }

  deleteGroup(id: String) {
    this._httpService.deleteGroup(id, this._userId).subscribe((data) => {
      if (data['error']) {
        console.log('error from DB', data['']);
      } else {
        this._router.navigateByUrl('/history');
      }
    });
  }

}
