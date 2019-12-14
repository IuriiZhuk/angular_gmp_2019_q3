import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../service/authorization.service';
import { UserCredential } from 'src/app/core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public msg = '';

  constructor(
    private auth: AuthorizationService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  handleOnSubmit({email, password}: UserCredential) {

    const output = this.auth.checkUsernameAndPassword(email, password);
    if (output) {
      alert(`You are successfully login`);
      this.router.navigate(['/courses']);
    } else {
      this.msg ='Invalid username or password';
    }
  }

}
