import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse, IAuthor } from '../../models/course';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public course: ICourse;
  public isAdd: boolean;
  public id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.course = {
      id: null,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: {} as IAuthor,
      isTopRated: false,
    };

    this.getCourse();
  }

  public getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.courseService.getCourseById(id)
        .subscribe((course: ICourse) => {
          console.log(course);
          return this.course = course;
        });
    }
  }

  public onCancelHandler() {
    this.location.back();
    this.router.navigate(['/courses']);
  }

  public onSaveHandler() {
    this.courseService.patchCourseById(this.id, this.course);
    this.router.navigate(['/courses']);
  }

}
