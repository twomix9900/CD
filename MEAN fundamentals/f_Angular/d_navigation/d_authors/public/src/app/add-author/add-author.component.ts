import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  _author: Object;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._author = { name: "" };
  }

  addAuthor() {
    let authorObs = this._httpService.addAuthor(this._author);
    authorObs.subscribe((data) => {
      console.log("Got data back from DB", data);
      this._author = { name: "" };
      this._router.navigateByUrl('/home');
    });
  }

}
