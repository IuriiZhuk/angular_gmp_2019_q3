import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { SearchBarComponent } from 'src/app/ui/search-bar/search-bar.component';
import { CourseListComponent } from '../../containers/course-list/course-list.component';
import { CourseDetailsComponent } from '../../components/course-details/course-details.component';
import { OrderByDatePipe } from 'src/app/ui/pipes/order-by-date.pipe';
import { HighlightedRelevantDirective } from 'src/app/ui/directives/highlighted-relevant.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/ui/pipes/filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from 'src/app/ui/pipes/duration.pipe';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  let filterPipeStub: Partial<FilterPipe>;

  filterPipeStub = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        SearchBarComponent,
        CourseListComponent,
        CourseDetailsComponent,
        OrderByDatePipe,
        HighlightedRelevantDirective,
        DurationPipe,
      ],
      imports: [FormsModule, FontAwesomeModule],
      providers: [{provide: FilterPipe, useValue: filterPipeStub }],
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
