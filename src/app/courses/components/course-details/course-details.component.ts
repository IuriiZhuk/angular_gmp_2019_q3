import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public delete = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public onDeleteHandler(id: string) {
    this.delete.emit(id);
  }

}
