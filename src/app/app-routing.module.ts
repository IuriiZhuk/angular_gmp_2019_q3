import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './core/auth/containers/login-page/login-page.component';
import { AuthGuard } from './core/auth/guard/auth.guard';
import { NotFoundComponent } from './ui/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent},
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
