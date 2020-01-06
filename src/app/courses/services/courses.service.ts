import {Injectable} from '@angular/core';
import {ICourse} from '../models/course';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private BASE_URL = 'http://localhost:3004';

  public getCourses(count = 4, term = ''): Observable<ICourse[]> {
    const url = `${this.BASE_URL}/courses`;
    return this.http.get<ICourse[]>(url, {
      params: {
        textFragment: term.toUpperCase(),
        start: `0`,
        count: `${count}`,
      }
    });
  }

  public createCourse(newCourse: ICourse): Observable<ICourse[]> {
    const url = `${this.BASE_URL}/courses`;
    return this.http.post<ICourse[]>(url, newCourse)
    .pipe(catchError((error: any) => throwError(error.json())));
  }

  public getCourseById(courseId: number): Observable<ICourse> {
    const url = `${this.BASE_URL}/courses/${courseId}`;
    return this.http.get<ICourse>(url)
    .pipe(catchError((error: any) => throwError(error.json())));
  }

  public patchCourseById(courseId: number, newCourseData: ICourse): Observable<ICourse> {
    const url = `${this.BASE_URL}/courses/${courseId}`;
    return this.http.patch<ICourse>(url, newCourseData)
    .pipe(catchError((error: any) => throwError(error.json())));
  }

  public deleteCourseById(courseId: number): Observable<void> {
    const url = `${this.BASE_URL}/courses/${courseId}`;
    return this.http.delete<any>(url)
    .pipe(catchError((error: any) => throwError(error.json())));
  }

  public getErrorTestCourses(): Observable<void> {
    const url = `${this.BASE_URL}/error`;
    return this.http.get<void>(url);
  }

}


