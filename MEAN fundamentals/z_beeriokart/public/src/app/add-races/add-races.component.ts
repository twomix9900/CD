import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-races',
  templateUrl: './add-races.component.html',
  styleUrls: ['./add-races.component.scss']
})
export class AddRacesComponent implements OnInit {
  _user: Object;
  _userId: String;
  _userGroups: any [];
  _formattedUserGroups: any[];
  _userScreenName: String;
  _allCourses: Object;
  _platformCourses: String [];
  _formToSubmit: Object;
  _selectedPlatform: any;
  _selectedCourse: any;
  _selectedGroupIdx: any;
  _selectedWinner: any;
  _selectedGroupId: any;

  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _authService: AuthService,
  ) { }

  ngOnInit() {
    this._formToSubmit = { platform: '', course: '', winner: '' };
    this._formattedUserGroups = [];
    this._httpService.getUserInfo(this._authService._loggedInUserId).subscribe((user) => {
      this._userScreenName = user['user'][0]['screenName'];
      this._userGroups = user['user'][0]['groups'];
      this._userId = user['user'][0]['_id'];
      this.groupFormatter();
    });

    this._allCourses = {
      'SNES': ['Mario Circuit 1', 'Donut Plains 1', 'Ghost Valley 1', 'Bowser Castle 1', 'Mario Circuit 2',
      'Choco Island 1', 'Ghost Valley 2', 'Donut Plains 2', 'Bowser Castle 2', 'Mario Circuit 3', 'Koopa Beach 1',
      'Choco Island 2', 'Vanilla Lake 1', 'Bowser Castle 3', 'Mario Circuit 4', 'Donut Plains 3', 'Koopa Beach 2',
      'Ghost Valley 3', 'Vanilla Lake 2', 'Rainbow Road'],
      'N64': ['Luigi Raceway', 'Moo Moo Farm', 'Koopa Troopa Beach', 'Kalimari Desert', 'Toads Turnpike',
      'Frappe Snowland', 'Choco Mountain', 'Mario Raceway', 'Wario Stadium', 'Sherbet Land',
      'Royal Raceway', 'Bowsers Castle', 'DKs Jungle Parkway', 'Yoshi Valley', 'Banshee Boardwalk', 'Rainbow Road'],
      'GC': ['Luigi Circuit', 'Peach Beach', 'Baby Park', 'Dry Dry Desert', 'Mushroom Bridge',
      'Mario Circuit', 'Daisy Cruiser', 'Waluigi Stadium', 'Sherbet Land', 'Mushroom City', 'Yoshi Circuit',
      'DK Mountain', 'Wario Colosseum', 'Dino Dino Jungle', 'Bowsers Castle', 'Rainbow Road'],
      'Wii': ['Luigi Circuit', 'Moo Moo Meadows', 'Mushroom Gorge', 'Toads Factory', 'Mario Circuit',
      'Coconut Mall', 'DK Summit', 'Warios Gold Mine', 'Daisy Circuit', 'Koopa Cape',
      'Maple Treeway', 'Grumble Volcano', 'Dry Dry Ruins', 'Moonview Highway', 'Bowsers Castle',
      'Rainbow Road', 'GC Peach Beach', 'DS Yoshi Falls', 'SNES Ghost Valley 2', 'N64 Mario Raceway',
      'N64 Sherbet Land', 'GBA Shy Guy Beach', 'DS Delfino Square', 'GC Waluigi Stadium',
      'DS Desert Hills', 'GBA Bowser Castle 3', 'N64 DKs Jungle Parkway', 'GC Mario Circuit',
      'SNES Mario Circuit 3', 'DS Peach Gardens', 'GC DK Mountain', 'N64 Bowsers Castle'],
      'WiiU': ['Mario Kart Stadium', 'Water Park', 'Sweet Sweet Canyon', 'Thwomp Ruins', 'Mario Circuit',
      'Toad Harbor', 'Twisted Mansion', 'Shy Guy Falls', 'Sunshine Airport', 'Dolphin Shoals', 'Electrodrome',
      'Mount Wario', 'Cloudtop Cruise', 'Bone Dry Dunes', 'Bowsers Castle', 'Rainbow Road',
      'GCN Yoshi Circuit', 'Excitebike Arena', 'Dragon Driftway', 'Mute City', 'GCN Baby Park', 'Wild Woods',
      'GBA Cheese Land', 'Animal Crossing', 'Wii Moo Meadows', 'GBA Mario Circuit', 'DS Cheep Cheep Beach',
      'N64 Toads Turnpike', 'GCN Dry Dry Desert', 'SNES Donut Plains 3', 'N64 Royal Raceway', '3DS Dk Jungle',
      'DS Wario Stadium', 'GC Sherbet Land', '3DS Music Park', 'N64 Yoshi Valley', 'DS Tick-Tock Clock',
      '3DS Piranha Plant Slide', 'Wii Grumble Volcano', 'N64 Rainbow Road', 'Wii Warios Gold Mine',
      'SNES Rainbow Road', 'Ice Ice Outpost', 'Hyrule Circuit', '3DS Neo Bowser City', 'Super Bell Subway',
      'GBA Ribbon Road', 'Big Blue'],
    };
  }

  setPlatform() {
    this._platformCourses = this._allCourses[this._selectedPlatform];
    this._formToSubmit['platform'] = this._selectedPlatform;
  }

  setGroup() {
    this._selectedGroupId = this._userGroups[this._selectedGroupIdx]['_id'];
  }

  setCourse() {
    this._formToSubmit['course'] = this._selectedCourse;
  }

  setWinner() {
    this._formToSubmit['winner'] = this._selectedWinner;
  }

  groupFormatter() {
    for (let i = 0; i < this._userGroups.length; i++) {
      let temp = this._userGroups[i]['users'];
      let temp2 = temp.length === 1 ? temp[0] : [ temp.slice(0, temp.length - 1).
        join(', '), temp[temp.length - 1] ].join(' and ');
      this._formattedUserGroups.push(temp2);
    }
  }

  submitRace() {
    this._httpService.initRace(this._formToSubmit).subscribe((race) => {
      if (race['error']) {
        console.log('error', race['error']);
      } else {
        this._httpService.addGroupToRace(this._selectedGroupId, race['race']['_id']).subscribe((updatedRace) => {
          if (updatedRace['error']) {
            console.log('error', updatedRace['er']);
          } else {
            let tempRaceId = updatedRace['race']['_id'];
            for (let i = 0; i < this._userGroups[this._selectedGroupIdx]['users'].length; i++) {
              let tempUserScreenname = this._userGroups[this._selectedGroupIdx]['users'][i];
              this._httpService.addRaceToUser(tempRaceId, tempUserScreenname).subscribe((data) => {
                if (data['error']) {
                  console.log('error:', data['error']);
                }
              });
            }
            this._router.navigateByUrl('/group-stats');
          }
        });
      }
    });
  }

}
