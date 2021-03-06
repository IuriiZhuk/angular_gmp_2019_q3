import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseDetailsComponent } from '../../components/course-details/course-details.component';
import { OrderByDatePipe } from 'src/app/ui/pipes/order-by-date.pipe';
import { HighlightedRelevantDirective } from 'src/app/ui/directives/highlighted-relevant.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from 'src/app/ui/pipes/duration.pipe';
import { Router } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
      ],
      declarations: [
        CourseListComponent,
        CourseDetailsComponent,
        OrderByDatePipe,
        HighlightedRelevantDirective,
        DurationPipe,
      ],
      providers: [
       { provide: Router, useValue: router },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    spyOn(console, 'log');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onDeleteHandler delet course', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(component.deleteCourseId, 'emit');
    component.onDeleteHandler('id');
    expect(component.deleteCourseId.emit).toHaveBeenCalled();

  });

  it('should not  onDeleteHandler delet course', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(component.deleteCourseId, 'emit');
    component.onDeleteHandler('id');
    expect(component.deleteCourseId.emit).not.toHaveBeenCalled();

  });

  it('should onLoadMoreHandler set message in console', () => {
    component.onLoadMoreHandler();
    expect(console.log).toHaveBeenCalledWith('Load More Pressed');
  });

  it(`should navigate to course`, () => {
    component.onAddHandle();
    expect(router.navigate).toHaveBeenCalledWith(['/add']);
  });

});
