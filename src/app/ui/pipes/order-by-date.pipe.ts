import { Pipe, PipeTransform } from '@angular/core';
import { ICourse, Course } from 'src/app/courses/models/course';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(courses: ICourse[]): any {
    return courses.sort((a: ICourse, b: ICourse) => Date.parse(a.creationDate) - Date.parse(b.creationDate) );
  }

}
