import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewInit, DoCheck} from '@angular/core';
import { AuthorizationService } from 'src/app/core/auth/service/authorization.service';
import { AuthUser } from 'src/app/core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit, DoCheck{

  public authUser: AuthUser;
  public isAuth: boolean;
  constructor(
    private auth: AuthorizationService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.authUser = this.auth.getUserInfo();
    this.isAuth = this.authUser && this.authUser.isAuth || false;
  }
  public ngDoCheck() {
    this.authUser = this.auth.getUserInfo();
    this.isAuth = this.authUser && this.authUser.isAuth || false;
  }

  public onLoginHandler() {
    const user = this.auth.getUserInfo();
    if (user) {
      this.auth.logOut();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
