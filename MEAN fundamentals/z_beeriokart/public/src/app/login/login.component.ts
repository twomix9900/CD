import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
// import { FormControl, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _regUser: Object;
  _loginUser: Object;
  _regErrorMessages: Object;
  _loginErrorMessage: String;
  _regSNError: Boolean;
  _regEmailError: Boolean;
  _isLoggedIn$: Observable<boolean>;

  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this._regUser = { email: '', password: '', screenName: '', passwordConfirm: '' };
    this._loginUser = { email: '', password: ''};
    this._regErrorMessages = { email: '', screenName: '' };
    this._isLoggedIn$ = this._authService.isLoggedIn();
  }

  login() {
    let userObs = this._httpService.login(this._loginUser);
    userObs.subscribe((data) => {
      console.log('got user back from DB', data);

      if (data['error']) {
        this._loginErrorMessage = 'Invalid login credentials';
      } else {
        this._loginErrorMessage = '';
        this._authService.login(data['user']['_id']);
        this._router.navigateByUrl('/history');
      }
    });
  }

  register() {
    let userObs = this._httpService.register(this._regUser);
    userObs.subscribe((data) => {
      this._regEmailError = false;
      this._regSNError = false;

      console.log('got user back from DB', data);
      if (data['error']) {
        if (data['error']['errors']['email']) {
          if (data['error']['errors']['email']['message']) {
            this._regErrorMessages['email'] = 'Email is already in use';
            this._regEmailError = true;
          }
        }

        if (data['error']['errors']['screenName']) {
          if (data['error']['errors']['screenName']['message']) {
            this._regErrorMessages['screenName'] = 'Screen Name is already in use';
            this._regSNError = true;
          }
        }
      }

      if (!this._regEmailError) {
        this._regErrorMessages['email'] = '';
      }

      if (!this._regSNError) {
        this._regErrorMessages['screenName'] = '';
      }

      if (!this._regEmailError && !this._regSNError) {
        this._authService.login(data['_id']);
        this._router.navigateByUrl('/faq');
      }

    });
  }

}
