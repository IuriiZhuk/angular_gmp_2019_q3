import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseDetailsComponent } from '../../components/course-details/course-details.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseDetailsComponent ]
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

  it('should onDeleteHandler set id in console', () => {
    component.onDeleteHandler('id');
    expect(console.log).toHaveBeenCalledWith('id');
  });

  it('should onLoadMoreHandler set message in console', () => {
    component.onLoadMoreHandler();
    expect(console.log).toHaveBeenCalledWith('Load More Pressed');
  });

});
