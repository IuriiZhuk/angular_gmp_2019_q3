import {Component, OnInit} from '@angular/core';
import {CoursesConstant, ICourse} from '../../models/course';
import {FilterPipe} from 'src/app/ui/pipes/filter.pipe';
import {CoursesService} from '../../services/courses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses$: Observable<ICourse[]>;
  public lastCourseCount = CoursesConstant.LAST_COURSE_COUNT;
  number;

  constructor(private filterPipe: FilterPipe,
              private courseService: CoursesService,
  ) {
  }

  ngOnInit() {
    this.courses$ = this.courseService.getCourses(this.lastCourseCount);
  }

  public onDeleteHandler(id: number) {
    this.courseService.deleteCourseById(id).subscribe(
      () => this.courses$ = this.courseService.getCourses(),
      (error) => console.log(error)
    );
  }

  public onSearchHandler(term: string): void {
    this.courses$ = this.courseService.getCourses(this.lastCourseCount, term);
  }

  public onLoadMoreHandler() {
    this.lastCourseCount += CoursesConstant.LOAD_MORE_COUNT;
    this.courses$ = this.courseService.getCourses(this.lastCourseCount);
  }

}
