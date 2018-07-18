import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  _movie: Object;
  _errors: any [] = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._movie = { title: "", review: "", stars: "", name: "" };
  }

  addMovie() {
    let movieObs = this._httpService.addMovie(this._movie);
    movieObs.subscribe((data) => {
      this._errors = [];
      console.log("Got data back from DB for addMovie", data);
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

}
