import { Component, OnInit, OnChanges } from '@angular/core';
import { ICourse } from '../../models/course';
import { FilterPipe } from 'src/app/ui/pipes/filter.pipe';
import { CoursesService } from '../../services/courses.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public searchValue: string;
  public filteredMockCourses: ICourse[];
  public courses$: Observable<ICourse[]> ;

  constructor(private filterPipe: FilterPipe,
              private courseService: CoursesService,
              ) { }

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
  }

  // public onSearchHandler(value: string) {
  //   this.courses$.pipe(
  //     map( course)
  //   );
  //   this.filteredMockCourses = [...this.filterPipe.transform(this.courses, value)];
  // }

  public onDeleteHandler(id: number) {
    this.courseService.deleteCourseById(id);
  }

}
