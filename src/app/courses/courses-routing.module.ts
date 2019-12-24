import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CourseComponent } from './pages/course/course.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AuthGuard } from '../core/auth/guard/auth.guard';

const coursesRoutes: Routes = [
  {  path: '', component: CoursesComponent, canActivateChild: [AuthGuard] },
      { path: ':id', component: CourseComponent },
      { path: 'new', component: CourseComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
