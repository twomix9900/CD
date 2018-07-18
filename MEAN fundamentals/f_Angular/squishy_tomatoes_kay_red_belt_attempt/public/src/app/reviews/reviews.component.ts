import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  _movieId: string;
  _movie: Object;
  _movieReviews: Object [];
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
    this._movie = { };
    this.getMovie();
  }

  getMovie() {
    let movieObs = this._httpService.getMovie(this._movieId);
    movieObs.subscribe((data) => {
      console.log("Got data back from DB", data);
      this._movie = data['movie'][0];
      this._movieReviews = this._movie['reviews'];
    });
  }

  deleteMovie(id: string) {
    let movieObs = this._httpService.deleteMovie(id);
    movieObs.subscribe((data) => {
      console.log("Got data back from DB for delete product", data);
      this._router.navigateByUrl('/movies');
    });
  }

}
