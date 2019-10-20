import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseListComponent } from './containers/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [CoursesComponent, CourseComponent, CourseListComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    UiModule,
  ]
})
export class CoursesModule { }
