import { Component, OnInit, OnChanges } from '@angular/core';
import { ICourse } from '../../models/course';
import { FilterPipe } from 'src/app/ui/pipes/filter.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public searchValue: string;
  public filteredMockCourses: ICourse[];
  public courses: ICourse[] ;

  constructor(private filterPipe: FilterPipe,
              private courseService: CoursesService,
              ) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses();
    this.filteredMockCourses = this.courses;
  }

  public onSearchHandler(value: string) {
    this.courses = this.courseService.getAllCourses();
    this.filteredMockCourses = [...this.filterPipe.transform(this.courses, value)];
  }

  public onDeleteHandler(id: string) {
    this.courseService.deleteCourseById(id);
    this.filteredMockCourses = this.courseService.getAllCourses();
  }



}
