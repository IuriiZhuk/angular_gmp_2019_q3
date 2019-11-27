import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthorizationService } from './service/authorization.service';



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ AuthorizationService ],
  exports: [ LoginPageComponent ],
})
export class AuthModule { }
