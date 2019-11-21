import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponent } from './main-header.component';
import { LogoComponent } from '../logo/logo.component';
import { AuthorizationService } from 'src/app/core/auth/service/authorization.service';
import { Router } from '@angular/router';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderComponent, LogoComponent ],
      providers: [
        AuthorizationService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
