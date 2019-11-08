import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseDetailsComponent } from './course-details.component';

// describe()

let fixture: ComponentFixture<CourseDetailsComponent>;
let component: CourseDetailsComponent;
let de: DebugElement;
let el: HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [],
    declarations: [CourseDetailsComponent],
    providers: [],
  });

  fixture = TestBed.createComponent(CourseDetailsComponent);
  component = fixture.componentInstance;
  de = fixture.debugElement.query(By.css('h2'));
  el = de.nativeElement;
});


