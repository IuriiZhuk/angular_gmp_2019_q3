import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/courses/models/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courseArray: ICourse[], searchValue: string): any {
    if (!searchValue) { return courseArray; }
    return courseArray.filter((course: ICourse) => course.title.includes(searchValue));
  }

}
