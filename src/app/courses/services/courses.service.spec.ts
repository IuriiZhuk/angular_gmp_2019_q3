import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { ICourse } from '../models/course';

let service: CoursesService;
const mockCourseList = [
  {
    id: 'id1',
    title: 'title1',
    creationDate: '12-12-21',
    duration: 10,
    description: 'description1',
    topRated: true,
  },
  {
    id: 'id2',
    title: 'title2',
    creationDate: '10-10-20',
    duration: 20,
    description: 'description2',
    topRated: false,
  },
];
let newCourse: ICourse;

let result: ICourse;

describe('CoursesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CoursesService] });

    service = TestBed.get(CoursesService);
    service.coursesList = [
      {
        id: 'id1',
        title: 'title1',
        creationDate: '12-12-21',
        duration: 10,
        description: 'description1',
        topRated: true,
      },
      {
        id: 'id2',
        title: 'title2',
        creationDate: '10-10-20',
        duration: 20,
        description: 'description2',
        topRated: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return course by Id', () => {
    result = {
      id: 'id1',
      title: 'title1',
      creationDate: '12-12-21',
      duration: 10,
      description: 'description1',
      topRated: true,
    },

    expect(service.getCourseById('id1')).toEqual(result);
  });

  it('should add course', () => {
    newCourse = {
      id: 'id3',
      title: 'title3',
      creationDate: '12-12-21',
      duration: 10,
      description: 'description1',
      topRated: true,
    };

    const resultCourses = mockCourseList.concat(newCourse);
    expect(service.addCourse(newCourse)).toEqual(resultCourses);
  });

  it('should delete course by Id', () => {
    const res = [{
      id: 'id1',
      title: 'title1',
      creationDate: '12-12-21',
      duration: 10,
      description: 'description1',
      topRated: true,
    }];

    expect(service.deleteCourseById('id2')).toEqual(res);
  });

  it('should update course by Id', () => {
    const res = [
      {
        id: 'id1-update',
        title: 'title1-update',
        creationDate: '12-12-21',
        duration: 10,
        description: 'description1',
        topRated: true,
      },
      {
        id: 'id2',
        title: 'title2',
        creationDate: '10-10-20',
        duration: 20,
        description: 'description2',
        topRated: false,
      },
    ];
    const updateCourse = {
      id: 'id1-update',
      title: 'title1-update',
      creationDate: '12-12-21',
      duration: 10,
      description: 'description1',
      topRated: true,
    };

    expect(service.updateCourseById('id1', updateCourse)).toEqual(res);
  });
});
