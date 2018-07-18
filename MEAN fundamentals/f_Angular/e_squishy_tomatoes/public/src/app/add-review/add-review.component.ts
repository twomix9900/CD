import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  _movieId: string;
  _movie: Object;
  _review: Object;
  _errors: any [] = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._movieId = params['id'];
    });
    this.getMovie();
    this._review = { name: "", stars: "", review: "" };
  }

  addReview() {
    let movieObs = this._httpService.addReview(this._movie['_id'], this._review);
    movieObs.subscribe((data) => {
      this._errors = [];
      console.log("Got data back from DB for addReview", data);
      if (data['error']) {
        for (let error of Object.keys(data['error']['errors'])) {
          if (data['error']['errors'][error]['kind'] === "required") {
            this._errors.push(data['error']['errors'][error]['path'] + " is required.");
          } else if (data['error']['errors'][error]['kind'] === "minlength") {
            this._errors.push(data['error']['errors'][error]['path'] + " must be at least " + data['error']['errors'][error]['properties']['minlength'] + " characters long.");
          } else if (data['error']['errors'][error]['kind'] === "max") {
            this._errors.push(data['error']['errors'][error]['path'] + " cannot be more than " + data['error']['errors'][error]['properties']['max'] + ".");
          } else if (data['error']['errors'][error]['kind'] === "min") {
            this._errors.push(data['error']['errors'][error]['path'] + " cannot be less than " + data['error']['errors'][error]['properties']['min'] + ".");
          }
        }
      } else {
        this._router.navigateByUrl('/movies');
        this._errors = [];
      }
    });
  }

  getMovie() {
    let movieObs = this._httpService.getMovie(this._movieId);
    movieObs.subscribe((data) => {
      console.log("Got data back from DB", data);
      this._movie = data['movie'][0];
    });
  }

}
