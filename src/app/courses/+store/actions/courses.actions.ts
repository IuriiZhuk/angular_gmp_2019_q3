import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../models/course';

export const LOAD_COURSES = createAction('[COURSES] Load Courses');

export const LOAD_COURSES_FAIL = createAction('[COURSES] Load Courses Fail',
  props<{ error: any }>()
);

export const LOAD_COURSES_SUCCESS = createAction(
  '[COURSES] Load Courses Success',
  props<{ courses: ICourse[] }>()
);

export const CREATE_COURSE = createAction('[COURSES] Create Course',
  props<{ course: ICourse }>()
);

export const CREATE_COURSE_FAIL = createAction('[COURSES] Create Course Fail',
  props<{ error: any }>()
);

export const CREATE_COURSE_SUCCESS = createAction(
  '[COURSES] Create Course Success',
  props<{ course: ICourse }>()
);

export const DELETE_COURSE = createAction('[COURSES] Delete Course',
  props<{ deleteCourse: ICourse }>()
);

export const DELETE_COURSE_FAIL = createAction('[COURSES] Delete Course Fail',
  props<{ error: any }>()
);

export const DELETE_COURSE_SUCCESS = createAction(
  '[COURSES] Delete Course Success',
  props<{ deleteCourse: ICourse }>()
);

export const UPDATE_COURSES = createAction('[COURSES] Update Course',
  props<{ course: ICourse }>()
);

export const UPDATE_COURSES_FAIL = createAction('[COURSES] Update Course Fail',
  props<{ error: any }>()
);

export const UPDATE_COURSES_SUCCESS = createAction(
  '[COURSES] Update Course Success',
  props<{ course: ICourse }>()
);


