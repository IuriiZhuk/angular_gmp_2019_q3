import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseDetailsComponent } from './course-details.component';
import { Course } from '../../models/course';
import { HighlightedRelevantDirective } from 'src/app/ui/directives/highlighted-relevant.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from 'src/app/ui/pipes/duration.pipe';

describe(`CourseDetailsComponent`, () => {

  let fixture: ComponentFixture<CourseDetailsComponent>;
  let component: CourseDetailsComponent;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [CourseDetailsComponent, HighlightedRelevantDirective, DurationPipe],
      providers: [],
    });

    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it('should create a component instance', () => {
    expect(component).toBeDefined();
  });

  it('should have no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display title after detectChanges()', () => {
    component.course = new Course('1', 'Test Course', '1-1-1', 58, false, 'test description');
    fixture.detectChanges();
    expect(el.textContent).toContain(component.course.title.toUpperCase());
  });

  it('should raise selected event when clicked', () => {
    let deletedCourseId: string;
    component.course = new Course('1', 'Test Course', '1-1-1', 58, false, 'test description');

    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('button.button.course-details__action.course-details__delete'));

    component.delete.subscribe((courseId: string) => (deletedCourseId = courseId));
    de.triggerEventHandler('click', component.course.id);
    expect(deletedCourseId).toBe(component.course.id);
  });

});


