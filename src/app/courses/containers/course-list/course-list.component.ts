import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

  @Input() public courses: ICourse[];
  @Output() public deleteCourseId = new EventEmitter<number>(true);
  @Output() public loadMore = new EventEmitter(true);
  constructor(
    private router: Router,
  ) { }


  public onDeleteHandler(id: number): void {
    const answer = confirm(`Do you really want to delete this course?`);
    if (answer) {
      this.deleteCourseId.emit(id);
    }
  }

  public onLoadMoreHandler(): void {
    this.loadMore.emit();
  }

  public onAddHandle(): void {
    this.router.navigate(['courses/add']);
  }

}

