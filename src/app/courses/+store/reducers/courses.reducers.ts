import {Action, createReducer, on, createFeatureSelector, createSelector} from '@ngrx/store';

import * as CoursesActions from '../actions/courses.actions';
import * as fromRoot from '../../../reducers';
import {IAuthor, ICourse} from '../../models/course';
import {IUser} from '../../../core/models/user';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  entities: { [id: number]: ICourse };
  loading: boolean;
  loaded: boolean;
  authors: { [id: number]: IAuthor };
}

export const initialState: CoursesState = {
  entities: {},
  loaded: false,
  loading: false,
  authors: {},
};

const coursesReducer = createReducer(
  initialState,
  on(
    CoursesActions.LOAD_COURSES,
    (state: CoursesState) => ({...state, loading: true})),
  on(
    CoursesActions.LOAD_COURSES_FAIL,
    (state: CoursesState) => ({...state, loading: false, loaded: false})),
  on(
    CoursesActions.LOAD_COURSES_SUCCESS,
    (state: CoursesState, {courses}) => ({...state, loading: false, loaded: true, entities: courseMapperHelper(courses, state)})),

  on(
    CoursesActions.LOAD_MORE_COURSES,
    (state: CoursesState) => ({...state, loading: true, loaded: false})),
  on(
    CoursesActions.LOAD_MORE_COURSES_FAIL,
    (state: CoursesState) => ({...state, loading: false, loaded: false})),
  on(
    CoursesActions.LOAD_MORE_COURSES_SUCCESS,
    (state: CoursesState, {courses}) => ({...state, loading: false, loaded: true, entities: courseMapperHelper(courses, state)})),

  on(
    CoursesActions.SEARCH_COURSES,
    (state: CoursesState) => ({...state, loading: true, loaded: false})),
  on(
    CoursesActions.SEARCH_COURSES_FAIL,
    (state: CoursesState) => ({...state, loading: false, loaded: false})),
  on(
    CoursesActions.SEARCH_COURSES_SUCCESS,
    (state: CoursesState, {courses}) => ({...state, loading: false, loaded: true, entities: courseSearchHelper(courses, state)})),

  on(
    CoursesActions.UPDATE_COURSES_SUCCESS,
    CoursesActions.CREATE_COURSE_SUCCESS,
    (state: CoursesState, {course}) => ({
      ...state,
      entities: {
        ...state.entities,
        [course.id]: course,
      }
    })),

  on(
    CoursesActions.DELETE_COURSE,
    (state: CoursesState) => ({...state, loading: true})),
  on(
    CoursesActions.DELETE_COURSE_FAIL,
    (state: CoursesState) => ({...state, loading: false})),

  on(
    CoursesActions.DELETE_COURSE_SUCCESS,
    (state: CoursesState, {id}) => {
      const {[id]: removed, ...entities} = state.entities;
      return {
        ...state,
        entities,
        loading: false,
      };
    }),

  on(
    CoursesActions.LOAD_AUTHORS_SUCCESS,
    (state: CoursesState, action) => ({...state, authors: authorMapperHelper(action.authors, state)})),
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

export const getCoursesEntitiesObject = createSelector(
  getCoursesState,
  (state: CoursesState) => state.entities
);
export const getSelectedCourse = createSelector(
  getCoursesEntitiesObject,
  fromRoot.selectRouter,
  (entities, router) => entities[router.state.params.id]
);

export const getAuthorsEntity = createSelector(
  getCoursesState,
  (state: CoursesState): { [id: number]: IAuthor } => state.authors
);

export const getAuthors = createSelector(
  getCoursesState,
  // (state: CoursesState): IAuthor[] => Object.keys(state.authors).map((id: string) => state.authors[parseInt(id, 10)])
  (state: CoursesState): IAuthor[] => Object.values(state.authors)
);

export const getAuthorsCourse = createSelector(
  getSelectedCourse,
  (course: ICourse): IAuthor[] => course && course.authors
);


const courseMapperHelper = (courses: ICourse[], state: CoursesState) => {
  return courses.reduce((entities: { [id: number]: ICourse }, course: ICourse) => ({
    ...entities,
    [course.id]: course,
  }), {...state.entities});
};

const courseSearchHelper = (courses: ICourse[], state: CoursesState) => {
  return courses.reduce((entities: { [id: number]: ICourse }, course: ICourse) => ({
    ...entities,
    [course.id]: course,
  }), {});
};

const authorMapperHelper = (authorsList: IAuthor[], state: CoursesState) => {
  return authorsList.reduce((authors: { [id: number]: IAuthor }, author: IAuthor) => ({
    ...authors,
    [author.id]: author,
  }), {});
};






