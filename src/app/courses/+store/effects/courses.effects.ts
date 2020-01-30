import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {CoursesService} from '../../services/courses.service';
import * as CoursesActions from '../actions/courses.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {IAuthor, ICourse} from '../../models/course';

import * as fromRouterActions from '../../../actions/router.actions';
import {AuthorizationService} from '../../../core/auth/service/authorization.service';


@Injectable()

export class CourseEffects {

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CoursesActions.LOAD_COURSES,
      ),
      mergeMap(({count, term}) => this.coursesService.getCourses(count, term)
                                      .pipe(
                                        map((courses: ICourse[]) => CoursesActions.LOAD_COURSES_SUCCESS({courses})),
                                        catchError(error => of(CoursesActions.LOAD_COURSES_FAIL({error})))
                                      ))
    ));

  loadMoreCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CoursesActions.LOAD_MORE_COURSES
      ),
      mergeMap(({count, term}) => this.coursesService.getCourses(count, term)
                                      .pipe(
                                        map((courses: ICourse[]) => CoursesActions.LOAD_MORE_COURSES_SUCCESS({courses})),
                                        catchError(error => of(CoursesActions.LOAD_MORE_COURSES_FAIL({error})))
                                      ))
    ));

  searchCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CoursesActions.SEARCH_COURSES
      ),
      mergeMap(({count, term}) => this.coursesService.getCourses(count, term)
                                      .pipe(
                                        map((courses: ICourse[]) => CoursesActions.SEARCH_COURSES_SUCCESS({courses})),
                                        catchError(error => of(CoursesActions.SEARCH_COURSES_FAIL({error})))
                                      ))
    ));

  deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.DELETE_COURSE),
    mergeMap(
      ({id}) => this.coursesService.deleteCourseById(id)
                    .pipe(
                      map(() => CoursesActions.DELETE_COURSE_SUCCESS({id})),
                      catchError(error => of(CoursesActions.DELETE_COURSE_FAIL({error})))
                    )
    )
    )
  );

  updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.UPDATE_COURSES),
    mergeMap(
      ({id, course}) => this.coursesService.patchCourseById(id, course)
                            .pipe(
                              map((updatedCourse: ICourse) => CoursesActions.UPDATE_COURSES_SUCCESS({course: updatedCourse})),
                              catchError(error => of(CoursesActions.DELETE_COURSE_FAIL({error})))
                            )
    )
    )
  );

  createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.CREATE_COURSE),
    mergeMap(
      ({course}) => this.coursesService.createCourse(course)
                        .pipe(
                          map((newCourse: ICourse) => CoursesActions.CREATE_COURSE_SUCCESS({course: newCourse})),
                          catchError(error => of(CoursesActions.CREATE_COURSE_FAIL({error})))
                        )
    )
    )
  );

  handleCourseSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(
      CoursesActions.UPDATE_COURSES_SUCCESS,
      CoursesActions.CREATE_COURSE_SUCCESS
    ),
    map(() => fromRouterActions.GO({
      path: ['/courses'],
    }))
    )
  );

  loadAuthors$ = createEffect(() => this.actions$.pipe(
    ofType(
      CoursesActions.LOAD_AUTHORS
    ),
    mergeMap(({term}) => this.coursesService.getAuthors(term)
                             .pipe(
                               map((authors: IAuthor[]) => CoursesActions.LOAD_AUTHORS_SUCCESS({authors})),
                               catchError(error => of(CoursesActions.LOAD_AUTHORS_FAIL({error})))
                             )))
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
  ) {
  }
}
