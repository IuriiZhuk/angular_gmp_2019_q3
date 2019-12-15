import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../models/course';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public course: ICourse;
  public isAdd: boolean;
  public id: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.isAdd = this.router.url.includes('add');
    if (!this.isAdd) {
      this.getCourse();
    } else {
      this.course = {
        id: '',
        title: '',
        creationDate: '',
        duration: 0,
        description: '',
        topRated: false,
      };
    }


  }

  public getCourse() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourseById(this.id);
  }

  public onCancelHandler() {
    this.location.back();
  }

  public onSaveHandler() {
    this.isAdd ?
      this.courseService.addCourse(this.course) :
      this.courseService.updateCourseById(this.id, this.course);
  }

}
