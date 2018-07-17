import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  _allAuthors: Object [];
  _author: Object;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getAuthors();
    this._author = { name: "", _id: "" };
  }

  getAuthors() {
    let authorObs = this._httpService.getAuthors();
    authorObs.subscribe((data) => {
      console.log("Got data back from DB", data);
      this._allAuthors = data['authors'];
    });
  }

  deleteAuthor(author) {
    let authorObs = this._httpService.deleteAuthor(author['_id']);
    authorObs.subscribe((data) => {
      console.log("Got data back from DB", data);
      this._router.navigateByUrl('/home');
      this.getAuthors();
    });
  }

}
