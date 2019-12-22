import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../models/course';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public delete = new EventEmitter<number>();

  public faStar = faStar;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public onDeleteHandler(id: number) {
    this.delete.emit(id);
  }

  public onEditHandler(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }

}
