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

  constructor(
    private auth: AuthorizationService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  handleOnSubmit(data: UserCredential) {
    this.auth.logIn(data);
    alert(`You are successfully login`);
    this.router.navigate(['']);
  }

}
