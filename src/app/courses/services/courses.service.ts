import { Injectable } from '@angular/core';
import { Course, ICourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesList: ICourse[] = [
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

  constructor() { }

  getAllCourses(): ICourse[] {
    return this.coursesList;
  }

  getCourseById(id: string): ICourse {
    return this.coursesList.find((courseItem: ICourse) => courseItem.id === id);
  }

  addCourse(course: ICourse): ICourse[] {
    return this.coursesList = this.coursesList.concat(course);
  }

  deleteCourseById(id: string): ICourse[] {
    return this.coursesList = this.coursesList.filter((courseItem: ICourse) => courseItem.id !== id);
  }

  updateCourseById(id: string, updateDataCourse: ICourse): ICourse[] {

    return this.coursesList.map( (item: ICourse) => {
      if (item.id === id) {
        return {...item, ...updateDataCourse};
      } else {
        return item;
      }
    });
  }

}
