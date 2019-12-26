import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseListComponent } from './containers/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { UiModule } from '../ui/ui.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    CourseDetailsComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    CoursesRoutingModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class CoursesModule { }
