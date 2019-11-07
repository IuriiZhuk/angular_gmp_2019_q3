import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { SearchBarComponent } from 'src/app/ui/search-bar/search-bar.component';
import { CourseListComponent } from '../../containers/course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from '../../components/course-details/course-details.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CoursesComponent, SearchBarComponent, CourseListComponent, CourseDetailsComponent, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
