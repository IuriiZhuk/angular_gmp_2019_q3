import {Component, OnInit} from '@angular/core';
import {NameModel} from 'src/app/core/models/user';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {CoursesState} from '../../courses/+store/reducers/courses.reducers';
import {select} from '@ngrx/store';
import {getIsAuthenticated, getUser} from '../../core/auth/+state/reducers/auth.reducer';
import * as fromRouter from '../../actions';
import * as fromAuthActions from '../../core/auth/+state/actions/auth.actions';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  public user$: Observable<NameModel>;
  public isAuthenticated$: Observable<boolean>;


  constructor(
    private router: Router,
    private store: Store<CoursesState>
  ) {
  }

  public ngOnInit() {
    this.store.dispatch(fromAuthActions.GET_USER_TOKEN_FROM_LOCAL_STORAGE());
    this.isAuthenticated$ = this.store.pipe(select(getIsAuthenticated));
    this.user$ = this.store.pipe(select(getUser));
  }

  public onLoginHandler() {
    this.store.dispatch(fromRouter.GO({path: ['/login']}));
    this.store.dispatch(fromAuthActions.LOG_OUT());
  }


}
