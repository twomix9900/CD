import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getMovies() {
    return this._http.get('/all-movies');
  }

  addMovie(movie: Object) {
    return this._http.post('/movie', movie);
  }

  getMovie(id: string) {
    return this._http.get(`/movie/${id}`);
  }

  deleteMovie(id: string) {
    return this._http.delete(`/movie/${id}`);
  }

  addReview(id: String, review: Object) {
    return this._http.put(`/movie/${id}`, review);
  }

  deleteReview(movieid: String, reviewid: String) {
    return this._http.delete(`/review/${movieid}/${reviewid}`);
  }
}
