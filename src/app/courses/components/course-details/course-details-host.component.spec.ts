import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CourseDetailsComponent } from './course-details.component';
import { Course } from '../../models/course';

/**
 * Test Host Component
 */
@Component({
  template: `
  <app-course-details [course]="course" (delete)="onDeleteHandler($event)"></app-course-details>
  `
})
class TestHostComponent {
  course = new Course('1', 'Test Course', '1-1-1', '60', 'test description');
  onDeleteHandler(id: string): void {
    console.log(id);
  }
}

describe(`CourseDetailsComponent when inside a test host`, () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, CourseDetailsComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('.button.course-details__action.course-details__delete'));

    fixture.detectChanges();
  });

  it('should raise selected event when clicked', () => {
    spyOn(testHost, 'onDeleteHandler');
    de.triggerEventHandler('click', '1');
    expect(testHost.onDeleteHandler).toHaveBeenCalled();
  });

});
