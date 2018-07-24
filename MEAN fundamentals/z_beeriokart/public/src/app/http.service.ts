import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  login(user: Object) {
    return this._http.post('/loginUser', user);
  }

  register(user: Object) {
    return this._http.post('/registerUser', user);
  }

  getUserInfo(id: String) {
    return this._http.post(`/user/${id}`, id);
  }

  addRaceToUser(userId: any, raceId: any) {
    return this._http.put(`/user/${userId}/race/${raceId}`, userId, raceId);
  }

  addUserToRace(userId: any, raceId: any) {
    return this._http.put(`/race/${raceId}/user/${userId}`, userId, raceId);
  }
}
