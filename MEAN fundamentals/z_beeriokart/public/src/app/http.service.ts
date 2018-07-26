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

  addUserToRace(userId: any, raceId: any) {
    return this._http.put(`/race/${raceId}/user/${userId}`, userId, raceId);
  }

  validateUser(screenName: any) {
    return this._http.get(`/screenName/${screenName}`);
  }

  initGroup() {
    return this._http.post('/group', {});
  }

  addUserToGroup(groupId: any, screenName: any) {
    return this._http.put(`/group/${groupId}/user/${screenName}`, groupId, screenName);
  }

  addGroupToUser(groupId: any, userSN: any) {
    return this._http.put(`/user/${userSN}/group/${groupId}`, userSN, groupId);
  }

  deleteGroup(groupId: any, userId: any) {
    return this._http.delete(`/user/${userId}/group/${groupId}`);
  }

  initRace(raceObj: any) {
    return this._http.post('race', raceObj);
  }

  addGroupToRace(groupId: any, raceId: any) {
    return this._http.put(`/race/${raceId}/group/${groupId}`, {});
  }

  addRaceToUser(raceId: any, userSN: any) {
    return this._http.put(`/user/${userSN}/race/${raceId}`, {});
  }

  getAllRaces() {
    return this._http.get('/races');
  }

  getGroup(groupId: any) {
    return this._http.get(`/group/${groupId}`);
  }

  getGroupInfoFromRaces(groupId: any) {
    return this._http.get(`/group/${groupId}/races`);
  }
}
