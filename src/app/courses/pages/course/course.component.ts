import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse, IAuthor } from '../../models/course';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { CoursesState } from '../../+store/reducers/courses.reducers';
import * as CoursesActions from '../../+store/actions/courses.actions';

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
    private store: Store<CoursesState>,
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
          return this.course = course;
        });
    }
  }

  public onCancelHandler() {
    this.router.navigate(['/courses']);
  }

  public onSaveHandler() {
    if (this.course.id) {
      this.store.dispatch(CoursesActions.UPDATE_COURSES({ id: this.id, course: this.course }));
    } else {
      this.store.dispatch(CoursesActions.CREATE_COURSE({ course: this.course }));
    }
    this.router.navigate(['/courses']);
  }

}
