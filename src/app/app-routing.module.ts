import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/pages/courses/courses.component';
import { LoginPageComponent } from './core/auth/containers/login-page/login-page.component';


const routes: Routes = [
  { path: '', component: CoursesComponent},
  { path: 'login', component: LoginPageComponent},
  { path: '**', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
