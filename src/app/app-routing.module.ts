import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/pages/courses/courses.component';
import { LoginPageComponent } from './core/auth/containers/login-page/login-page.component';
import { CourseComponent } from './courses/pages/course/course.component';


const routes: Routes = [
  { path: '', component: CoursesComponent},
  { path: 'add', component: CourseComponent},
  { path: 'edit', component: CourseComponent},
  { path: 'login', component: LoginPageComponent},
  { path: '**', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
