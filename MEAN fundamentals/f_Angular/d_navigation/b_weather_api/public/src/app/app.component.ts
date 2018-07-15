import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent implements OnInit {
  constructor(
    private _httpService: HttpService, private _http: HttpClient, private _route: ActivatedRoute, private _router: Router 
  ){};

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  };


}