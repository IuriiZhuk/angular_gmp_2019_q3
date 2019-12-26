import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/courses/models/course';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(courses: ICourse[]): any {
    return courses.sort((a: ICourse, b: ICourse) => Date.parse(a.date) - Date.parse(b.date) );
  }

}
