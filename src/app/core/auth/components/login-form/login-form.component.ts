import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public emailValue: string;
  public passwordValue: string;

  @Output() private login = new EventEmitter<any>(true);

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
  }

}
