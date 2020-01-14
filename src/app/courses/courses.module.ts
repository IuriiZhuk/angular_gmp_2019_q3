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
import { StoreModule } from '@ngrx/store';
import * as fromCourses from '../courses/+store/reducers/courses.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './+store/effects/courses.effects';



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
    EffectsModule.forFeature([CourseEffects]),
    StoreModule.forFeature(fromCourses.coursesFeatureKey, fromCourses.reducer),
  ],
  exports: [
    MainPageComponent,
  ],
})
export class CoursesModule { }
