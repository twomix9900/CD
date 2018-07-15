import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from './http.service';
import { CoinService } from './coin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router, 
    private _coinService: CoinService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
}
