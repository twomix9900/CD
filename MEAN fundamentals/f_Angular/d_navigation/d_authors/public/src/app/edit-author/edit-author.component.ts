import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  _authorId: string;
  _author: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._authorId = params['id'];
    });
    this._author = { name: "" };
    this.getAuthor();
  }

  getAuthor() {
    let authorObs = this._httpService.getAuthor(this._authorId);
    authorObs.subscribe((data) => {
      console.log('got data back from DB', data);
      this._author = data['author'][0];
    });
  }

  editAuthor() {
    let authorObs = this._httpService.editAuthor(this._author);
    authorObs.subscribe((data) => {
      console.log('got data back from DB', data);
      this._router.navigateByUrl('/home');
    });
  }

}
