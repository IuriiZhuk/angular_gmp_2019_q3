import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightedRelevantDirective } from './highlighted-relevant.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: `app-test-host-component`,
  template: `
    <div [appHighlightedRelevant]="date">
      Test
    </div>
  `
})

class TestHostComponent {
  date: string;
  constructor() {}
}

describe('[appHighlightedRelevant] directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let comp: TestHostComponent;
  let el: DebugElement;
  let div: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
    declarations: [
      HighlightedRelevantDirective,
      TestHostComponent,
    ],
    schemas: [ NO_ERRORS_SCHEMA],
  }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(TestHostComponent);
    comp = fixture.componentInstance;
    el = fixture.debugElement.query(By.directive(HighlightedRelevantDirective));
    div = el.nativeElement;
  });

  it('should set blue color for border', () => {
    comp.date = '21 Dec, 2019';
    fixture.detectChanges();
    expect(div.style.border).toBe('1px solid blue');
  });

});
