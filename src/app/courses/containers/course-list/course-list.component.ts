import { Component, OnInit } from '@angular/core';
import { ICourse, Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public mockCourses: ICourse[];
  constructor() { }

  ngOnInit() {
    this.mockCourses = [
      new Course('1', 'Video Course 1. Name tag', '9 Nov, 2018', '1h 28 min', false,
       `Learn about where you can find course descriptions,
        what information they include, how they work, and details
        about various components of a course description. Course
        descriptions report information about a university or
        college's classes. They're published both in course
        catalogs that outline degree requirements and in cours
        schedules that contain descriptions for all courses offered
        during a particular semester.`),
      new Course('2', 'Video Course 2. Name tag', '9 Nov, 2018', '1h 28 min', true,
       `Learn about where you can find course descriptions,
        what information they include, how they work, and details
        about various components of a course description. Course
        descriptions report information about a university or
        college's classes. They're published both in course
        catalogs that outline degree requirements and in cours
        schedules that contain descriptions for all courses offered
        during a particular semester.`),
      new Course('3', 'Video Course 3. Name tag', '9 Nov, 2018', '1h 28 min', false,
       `Learn about where you can find course descriptions,
        what information they include, how they work, and details
        about various components of a course description. Course
        descriptions report information about a university or
        college's classes. They're published both in course
        catalogs that outline degree requirements and in cours
        schedules that contain descriptions for all courses offered
        during a particular semester.`),
    ];
  }

  public onDeleteHandler(id: string): void {
    console.log(id);
  }

  public onLoadMoreHandler(): void {
    console.log('Load More Pressed');
  }

}

