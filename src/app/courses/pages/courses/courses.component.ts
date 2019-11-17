import { Component, OnInit } from '@angular/core';
import { ICourse, Course } from '../../models/course';
import { FilterPipe } from 'src/app/ui/pipes/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public searchValue: string;
  public filteredMockCourses: ICourse[];
  public mockCourses: ICourse[] = [
    new Course('1', 'Video Course 1. Name tag', '10 Nov, 2019', 90, false,
     `Learn about where you can find course descriptions,
     what information they include, how they work, and details
      about various components of a course description. Course
      descriptions report information about a university or
      college's classes. They're published both in course
      catalogs that outline degree requirements and in cours
      schedules that contain descriptions for all courses offered
      during a particular semester.`),
      new Course('2', 'Video Course 2. Name tag', '9 Nov, 2018', 55, true,
      `Learn about where you can find course descriptions,
      what information they include, how they work, and details
      about various components of a course description. Course
      descriptions report information about a university or
      college's classes. They're published both in course
      catalogs that outline degree requirements and in cours
      schedules that contain descriptions for all courses offered
      during a particular semester.`),
      new Course('3', 'Video Course 3. Name tag', '21 Dec, 2019', 400, false,
     `Learn about where you can find course descriptions,
     what information they include, how they work, and details
     about various components of a course description. Course
      descriptions report information about a university or
      college's classes. They're published both in course
      catalogs that outline degree requirements and in cours
      schedules that contain descriptions for all courses offered
      during a particular semester.`),
    ];

  constructor(private filterPipe: FilterPipe) { }

  ngOnInit() {
    this.filteredMockCourses = this.mockCourses;
  }
  public onSearchHandler(value: string) {
    this.filteredMockCourses = [...this.filterPipe.transform(this.mockCourses, value)];
  }


}
