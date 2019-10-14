import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseListComponent } from './containers/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';



@NgModule({
  declarations: [CoursesComponent, CourseComponent, CourseListComponent, CourseDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
