import {Component, OnInit, OnDestroy} from '@angular/core';
import {CoursesConstant, ICourse} from '../../models/course';
import {FilterPipe} from 'src/app/ui/pipes/filter.pipe';
import {CoursesService} from '../../services/courses.service';
import { Store, select } from '@ngrx/store';
import { getCoursesEntities, CoursesState, getCoursesLoading } from '../../+store/reducers/courses.reducers';
import * as CoursesActions from '../../+store/actions/courses.actions';
import { Observable, Subject, of } from 'rxjs';
import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

const subject = new Subject();

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courses$: Observable<ICourse[]>;
  public isLoading$: Observable<boolean>;
  public lastCourseCount = CoursesConstant.LAST_COURSE_COUNT;
  number;

  constructor(
    private filterPipe: FilterPipe,
    private courseService: CoursesService,
    private store: Store<CoursesState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(CoursesActions.LOAD_COURSES({ count: this.lastCourseCount }));
    this.courses$ = this.store.pipe(select(getCoursesEntities));
    this.isLoading$ = this.store.pipe(select(getCoursesLoading));
    subject.subscribe(
      (term: string) => this.store.dispatch(CoursesActions.SEARCH_COURSES({ count: this.lastCourseCount, term }))
    );
  }

  public onDeleteHandler(id: number) {
    this.store.dispatch(CoursesActions.DELETE_COURSE({id}));
  }

  public onSearchHandler(term: string): void {
    of(term).pipe(
      filter(value => value.length > 2),
      debounceTime(700),
      distinctUntilChanged(),
    ).subscribe(value =>  subject.next(value));
  }

  public onLoadMoreHandler() {
    this.lastCourseCount += CoursesConstant.LOAD_MORE_COUNT;
    this.store.dispatch(CoursesActions.LOAD_MORE_COURSES({ count: this.lastCourseCount }));
  }

  public ngOnDestroy() {
    // subject.unsubscribe();
  }

}
