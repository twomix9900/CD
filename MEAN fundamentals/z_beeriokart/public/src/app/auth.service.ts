import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  _loggedInUserId: any;
  _userLoggedIn  = false;
  _loggedInUserScreenname: String;
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login(id: String, screenName: String): void {
    // localStorage.setItem('token', 'JWT');
    this._userLoggedIn = true;
    this._loggedInUserId = id;
    this._loggedInUserScreenname = screenName;
    this.isLoginSubject.next(true);
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout(): void {
    // localStorage.removeItem('token');
    this._userLoggedIn = false;
    this._loggedInUserId = '';
    this._loggedInUserScreenname = '';
    this.isLoginSubject.next(false);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return !!this._userLoggedIn;
  }
}
