import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewInit, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import { AuthorizationService } from 'src/app/core/auth/service/authorization.service';
import { AuthUser } from 'src/app/core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent implements OnInit {

  public authUser: AuthUser;
  public isAuth: boolean;
  constructor(
    private auth: AuthorizationService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit() {

    this.isAuth = this.auth.isAuthenticated();
    console.log(`header, onInit`, this.isAuth);
  }


  public onLoginHandler() {
    this.auth.logOut();
    this.router.navigate(['/login']);
    this.cdRef.detectChanges();
  }
}
