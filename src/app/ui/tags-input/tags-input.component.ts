import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormArray, FormArrayName} from '@angular/forms';
import {IAuthor} from '../../courses/models/course';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {CoursesState, getAuthors, getAuthorsCourse, getAuthorsEntity} from '../../courses/+store/reducers/courses.reducers';
import * as CourseActions from '../../courses/+store/actions/courses.actions';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements OnInit, OnDestroy {

  public subscription = new Subscription();
  public inputValue = '';
  public map = new Map();
  public tagsForm = this.fb.group({
    tagInput: [''],
    authors: this.fb.array([]),
  });

  public authorsList: IAuthor[] = [];
  public availableAuthors: IAuthor[];

  @Output() public authorName = new EventEmitter<string>(true);

  constructor(
    private fb: FormBuilder,
    private store: Store<CoursesState>,
  ) {
  }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(getAuthors)).subscribe(
      (authors: IAuthor[]) => {
        this.availableAuthors = authors;
      }
    ));

    this.subscription.add(this.store.pipe(select(getAuthorsCourse)).subscribe(
      (authors: IAuthor[]) => {
        this.authorsList = authors;
        if (authors && authors.length) {
          authors.forEach(author => this.authors.push(this.fb.control({
            name: `${author.name} ${author.lastName}`
          })));
        }
      }
    ));

    this.subscription.add(
      this.tagsForm.get('tagInput').valueChanges
          .pipe(
            filter(value => value && value.length > 1),
            debounceTime(700),
            distinctUntilChanged(),
          )
          .subscribe(
            ((value: string) => {
              this.store.dispatch(CourseActions.LOAD_AUTHORS({term: value}));
            })
          )
    );
  }

  public removeAuthor(i) {
    this.authors.removeAt(i);
  }

  public addAuthorHandler(selectAuthor: IAuthor) {
    const duplicate = this.tagsForm.get('authors').value;
    console.log(duplicate);
    this.authors.push(this.fb.control({
      name: `${selectAuthor.name}`
    }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

  get authors(): FormArray {
    return this.tagsForm.get('authors') as FormArray;
  }

  // public addAuthor() {
  //   this.authors.push(Fo);
  // }

}
