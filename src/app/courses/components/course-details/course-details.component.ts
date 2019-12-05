import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../models/course';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public delete = new EventEmitter<string>();
  public faStar = faStar;

  constructor() { }

  ngOnInit() {
  }

  public onDeleteHandler(id: string) {
    this.delete.emit(id);
  }

}
