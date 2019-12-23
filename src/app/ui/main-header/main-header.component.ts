import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthorizationService} from 'src/app/core/auth/service/authorization.service';
import {IUser, TokenRequestModel} from 'src/app/core/models/user';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  public user$: Observable<IUser>;
  public userToken: TokenRequestModel;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {
  }

  public ngOnInit() {
    this.userToken = {token: this.authService.getUserTokenFromLocalStorage()};
    this.user$ = this.authService.getUserInfo(this.userToken);
  }

  public onLoginHandler() {
    this.router.navigate(['/login']);
  }


}
