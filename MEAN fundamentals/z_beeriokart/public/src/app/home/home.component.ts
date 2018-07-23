import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { FormControl, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _user: Object;
  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this._user = { email: "", password: "" };
  }

  login() {
    let userObs = this._httpService.login(this._user);
    userObs.subscribe((data) => {
      console.log("got user back from DB", data);
    });
  }

}
