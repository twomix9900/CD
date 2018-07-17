import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getAuthors() {
    return this._http.get('/authors');
  }

  editAuthor(author: Object) {
    return this._http.put(`/author/${author['_id']}`, author);
  }

  getAuthor(id: string) {
    return this._http.get(`/author/${id}`);
  }

  deleteAuthor(id: string) {
    return this._http.delete(`/author/${id}`);
  }

  addAuthor(author: Object) {
    return this._http.post('/author', author);
  }

}
