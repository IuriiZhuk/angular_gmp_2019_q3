import { Component, Input } from '@angular/core';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent{

  @Input() public mockCourses: ICourse[];
  constructor() { }


  public onDeleteHandler(id: string): void {
    console.log(id);
  }

  public onLoadMoreHandler(): void {
    console.log('Load More Pressed');
  }

}

