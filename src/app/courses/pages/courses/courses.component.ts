import {Component, OnInit, OnDestroy} from '@angular/core';
import {CoursesConstant, ICourse} from '../../models/course';
import {FilterPipe} from 'src/app/ui/pipes/filter.pipe';
import {CoursesService} from '../../services/courses.service';
import { Observable, Subject, of } from 'rxjs';
import { filter, distinctUntilChanged, throttleTime, debounceTime } from 'rxjs/operators';

const subject = new Subject();

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  public courses$: Observable<ICourse[]>;
  public lastCourseCount = CoursesConstant.LOAD_MORE_START;
  number;

  constructor(private filterPipe: FilterPipe,
              private courseService: CoursesService,
  ) {
  }

  ngOnInit() {
    this.courses$ = this.courseService.getCourses(this.lastCourseCount);
    subject.subscribe(
      ((value: string) => this.courses$ = this.courseService.getCourses(this.lastCourseCount, value))
    );
  }

  public onDeleteHandler(id: number) {
    this.courseService.deleteCourseById(id).subscribe(
      () => this.courses$ = this.courseService.getCourses(),
      (error) => console.log(error)
    );
  }

  public onSearchHandler(term: string): void {
    of(term).pipe(
      filter(value => value.length > 2),
      debounceTime(700),
      distinctUntilChanged(),
    ).subscribe(value =>  subject.next(value));


    //
    // this.courses$ = this.courseService.getCourses(this.lastCourseCount, term);
  }

  public onLoadMoreHandler() {
    this.lastCourseCount += CoursesConstant.LOAD_MORE_COUNT;
    this.courses$ = this.courseService.getCourses(this.lastCourseCount);
  }

  public ngOnDestroy() {
    subject.unsubscribe();
  }

}
