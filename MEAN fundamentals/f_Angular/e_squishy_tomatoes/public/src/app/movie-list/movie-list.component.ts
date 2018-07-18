import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  _movies: Object [];
  _showAddMovie: Boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getMovies();
    this._showAddMovie = false;
  }

  getMovies() {
    let moviesObs = this._httpService.getMovies();
    moviesObs.subscribe((data) => {
      console.log('Got data back from DB', data);
      this._movies = data['movies'];
      this.ratingCalculator();
    });
  }

  ratingCalculator() {
    for (let i = 0; i < this._movies.length; i++) {
      let total = 0;
      for (let j = 0; j < this._movies[i]['reviews'].length; j++) {
        total += this._movies[i]['reviews'][j]['stars'];
      }
      this._movies[i]['rating'] = total / this._movies[i]['reviews'].length;
    }
  }

  showAddMovieComponent() {
   this._showAddMovie = true;
  }

  hideAddMovieComponent(e) {
    this._showAddMovie = false;
    this.getMovies();
  }

}
