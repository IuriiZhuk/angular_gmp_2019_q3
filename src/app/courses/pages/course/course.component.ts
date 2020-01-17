import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {IAuthor, ICourse} from '../../models/course';
import {Location} from '@angular/common';
import {select, Store} from '@ngrx/store';
import {CoursesState, getSelectedCourse} from '../../+store/reducers/courses.reducers';
import * as CoursesActions from '../../+store/actions/courses.actions';
import * as fromRouterActions from '../../../actions/router.actions';
import {Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {

  public course: ICourse;
  public id: number;
  public subscription = new Subscription();
  public authors: IAuthor[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private location: Location,
    private store: Store<CoursesState>,
    private fb: FormBuilder,
  ) {
  }

  public courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    duration: ['', [Validators.required, Validators.pattern(/\d+$/)]],
    date: ['', Validators.required],
    authors: [''],

  });

  ngOnInit() {
    this.authors = [];
    this.subscription.add(this.store.pipe(select(getSelectedCourse)).subscribe(
      (course: ICourse) => {
        if (course) {
          this.course = course;
          this.setCourseValueToForm(course);
          this.authors = course.authors;
        }
      }
    ));
  }

  public onCancelHandler() {
    this.courseForm.get('authors').setValue({
      courseAuthors: [],
      tagInput: '',
    });
    this.store.dispatch(fromRouterActions.GO({
      path: ['/courses'],
    }));
  }

  public onSaveHandler() {
    this.course = {...this.course , ...this.courseForm.value};
    if (this.course.id) {
      this.store.dispatch(CoursesActions.UPDATE_COURSES({id: this.course.id, course: this.course}));
    } else {
      this.store.dispatch(CoursesActions.CREATE_COURSE({course: this.course}));
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

  private setCourseValueToForm(course: ICourse) {
    const date = new Date(course.date);
    const formattedDate = date.toISOString().substring(0, 10);

    this.courseForm.setValue({
      name: course.name,
      description: course.description,
      duration: course.length,
      date: formattedDate,
      authors: {courseAuthors : course.authors, tagInput: ''},
    });
  }
}
