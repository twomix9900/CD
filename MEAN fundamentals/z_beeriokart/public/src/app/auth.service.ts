import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  _loggedInUserId: String;
  _userLoggedIn  = false;
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
  login(id: String): void {
    // localStorage.setItem('token', 'JWT');
    this._userLoggedIn = true;
    this._loggedInUserId = id;
    this.isLoginSubject.next(true);
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout(): void {
    // localStorage.removeItem('token');
    this._userLoggedIn = false;
    this._loggedInUserId = '';
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
