import {Component} from '@angular/core';
import {AuthorizationService} from '../../service/authorization.service';
import {LoginRequestModel, TokenRequestModel} from '../../../models/user';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

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
  ) {
  }

  public onSubmit(): void {
    this.userCredentials = {
      login: this.loginValue,
      password: this.passwordValue,
    };

    this.authService.logIn(this.userCredentials).subscribe(
      (token: TokenRequestModel) => {
        this.authService.setTokenToLocalStorage(token);
        this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => {
        this.passwordValue = '';
        this.loginValue = '';
        console.log(error);
        return alert(`${error.message}, :((( ,${error.statusText}`);
      }
    )
    ;
  }

}
