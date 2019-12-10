import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CourseComponent } from './pages/course/course.component';
import { CoursesComponent } from './pages/courses/courses.component';



const coursesRoutes: Routes = [
  { path: 'courses', component: MainPageComponent, pathMatch: 'full', children: [
      { path: '', component: CoursesComponent },
      { path: ':id', component: CourseComponent },
      { path: 'new', component: CourseComponent },
    ],
  },
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
