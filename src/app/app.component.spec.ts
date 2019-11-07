import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './ui/main-header/main-header.component';
import { BreadcrumbsComponent } from './ui/breadcrumbs/breadcrumbs.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { LogoComponent } from './ui/logo/logo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, MainHeaderComponent, BreadcrumbsComponent, MainFooterComponent, LogoComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
