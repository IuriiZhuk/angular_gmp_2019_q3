import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import * as CoursesActions from '../actions/courses.actions';
import { switchMap, mergeMap, catchError, map } from 'rxjs/operators';
import { ICourse } from '../../models/course';


@Injectable()

export class CourseEffects {

  loadCourses$ =
    createEffect(() =>
      this.actions$.pipe(
      ofType(CoursesActions.LOAD_COURSES),
      mergeMap(() => this.coursesService.getCourses()
        .pipe(
          map((courses: ICourse[]) => CoursesActions.LOAD_COURSES_SUCCESS({ courses })),
          catchError( error => of(CoursesActions.LOAD_COURSES_FAIL({error})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
  ) {}
}
