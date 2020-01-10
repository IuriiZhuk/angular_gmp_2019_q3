import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {IAuthor, ICourse} from '../../models/course';
import {Location} from '@angular/common';
import {select, Store} from '@ngrx/store';
import {CoursesState, getSelectedCourse} from '../../+store/reducers/courses.reducers';
import * as CoursesActions from '../../+store/actions/courses.actions';
import * as fromRouterActions from '../../../actions/router.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {

  public course: ICourse;
  public id: number;
  public subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private location: Location,
    private store: Store<CoursesState>,
  ) {
  }

  ngOnInit() {

    this.subscription.add(this.store.pipe(select(getSelectedCourse)).subscribe(
      (course: ICourse) => {
        if (course) {
          this.course = course;
        } else {
          this.course = {
            id: null,
            name: '',
            date: '',
            length: null,
            description: '',
            authors: {} as IAuthor,
            isTopRated: false,
          };
        }
      }
    ));
  }

  public onCancelHandler() {
    this.store.dispatch(fromRouterActions.GO({
      path: ['/courses'],
    }));
  }

  public onSaveHandler() {
    if (this.course.id) {
      this.store.dispatch(CoursesActions.UPDATE_COURSES({id: this.course.id, course: this.course}));
    } else {
      this.store.dispatch(CoursesActions.CREATE_COURSE({course: this.course}));
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
