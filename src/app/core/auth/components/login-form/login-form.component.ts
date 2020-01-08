import {Component} from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';
import {LoginRequestModel, TokenRequestModel} from '../../../models/user';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuthReducer from '../../+state/reducers/auth.reducer';
import * as fromAuthActions from '../../+state/actions/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public loginValue: string;
  public passwordValue: string;
  public userCredentials: LoginRequestModel;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private store: Store<fromAuthReducer.AuthentificationState>
  ) {
  }

  public onSubmit(): void {
    this.userCredentials = {
      login: this.loginValue,
      password: this.passwordValue,
    };
    this.store.dispatch(fromAuthActions.LOG_IN({ user: this.userCredentials }));
  }

}
