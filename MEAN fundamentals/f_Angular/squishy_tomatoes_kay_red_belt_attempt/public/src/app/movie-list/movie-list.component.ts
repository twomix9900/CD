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

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    let moviesObs = this._httpService.getMovies();
    moviesObs.subscribe((data) => {
      console.log('Got data back from DB', data);
      this._movies = data['movies'];
    });
  }

}
