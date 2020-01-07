import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import * as CoursesActions from '../actions/courses.actions';
import { ICourse } from '../../models/course';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  entities: {[id: number]: ICourse};
  loading: boolean;
  loaded: boolean;
}

export const initialState: CoursesState = {
  entities: {},
  loaded: false,
  loading: false,
};

const coursesReducer = createReducer(
  initialState,
  on(
    CoursesActions.LOAD_COURSES,
    (state: CoursesState) => ({ ...state, loading: true })),
  on(
    CoursesActions.LOAD_COURSES_FAIL,
    (state: CoursesState) => ({ ...state, loading: false, loaded: false })),
  on(
    CoursesActions.LOAD_COURSES_SUCCESS,
    (state: CoursesState, { courses }) => ({ ...state, loading: false, loaded: true, entities: courseMaperHelper(courses, state) })),

    on(
      CoursesActions.LOAD_MORE_COURSES,
      (state: CoursesState) => ({ ...state, loading: true, loaded: false })),
    on(
      CoursesActions.LOAD_MORE_COURSES_FAIL,
      (state: CoursesState) => ({ ...state, loading: false, loaded: false })),
    on(
      CoursesActions.LOAD_MORE_COURSES_SUCCESS,
      (state: CoursesState, { courses }) => ({ ...state, loading: false, loaded: true, entities: courseMaperHelper(courses, state) })),

      on(
        CoursesActions.SEARCH_COURSES,
        (state: CoursesState) => ({ ...state, loading: true, loaded: false })),
      on(
        CoursesActions.SEARCH_COURSES_FAIL,
        (state: CoursesState) => ({ ...state, loading: false, loaded: false })),
      on(
        CoursesActions.SEARCH_COURSES_SUCCESS,
        (state: CoursesState, { courses }) => ({ ...state, loading: false, loaded: true, entities: courseSearchHelper(courses, state) })),

  on(CoursesActions.UPDATE_COURSES_SUCCESS, CoursesActions.CREATE_COURSE_SUCCESS, (state: CoursesState, {course}) => ({
    ...state,
    entities: {
      ...state.entities,
      [course.id]: course,
    }
  })),
  on(CoursesActions.DELETE_COURSE_SUCCESS, (state: CoursesState, { deleteCourse }) => {
    const { [deleteCourse.id]: removed, ...entities } = state.entities;
    return {
      ...state,
      entities,
    };
  }),
);

export function reducer(state: CoursesState | undefined, action: Action) {
  return coursesReducer(state, action);
}

export const getCoursesState = createFeatureSelector<CoursesState>(
 coursesFeatureKey
);

export const getCoursesLoading = createSelector(
  getCoursesState,
  (state: CoursesState): boolean => state.loading
);

export const getCoursesLoaded = createSelector(
  getCoursesState,
  (state: CoursesState): boolean => state.loaded
);

export const getCoursesEntities = createSelector(
  getCoursesState,
  (state: CoursesState): ICourse[] => Object.keys(state.entities).map((id: string) => state.entities[parseInt(id, 10)])
);


const courseMaperHelper = (courses: ICourse[], state: CoursesState) => {
  return courses.reduce((entities: { [id: number]: ICourse }, course: ICourse) => ({
    ...entities,
    [course.id]: course,
  }), { ...state.entities });
};

const courseSearchHelper = (courses: ICourse[], state: CoursesState) => {
  return courses.reduce((entities: { [id: number]: ICourse }, course: ICourse) => ({
    ...entities,
    [course.id]: course,
  }), { });
};





