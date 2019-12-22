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
  }

  public getCourse() {
  }

  public onCancelHandler() {
    this.location.back();
    this.router.navigate(['/courses']);
  }

  public onSaveHandler() {
  }

}
