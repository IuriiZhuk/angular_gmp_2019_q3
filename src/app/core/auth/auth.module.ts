import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthorizationService } from './service/authorization.service';
import { AuthentificationEffects } from './+state/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromAuthentification from './+state/reducers/auth.reducer';



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    EffectsModule.forFeature([AuthentificationEffects]),
    StoreModule.forFeature(fromAuthentification.authentificationFeatureKey, fromAuthentification.reducer),
  ],
  providers: [ AuthorizationService ],
  exports: [ LoginPageComponent],
})
export class AuthModule { }
