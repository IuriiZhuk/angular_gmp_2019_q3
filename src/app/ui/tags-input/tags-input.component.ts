import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
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
      }
    ));

    this.subscription.add(
      this.tagsForm.get('tagInput').valueChanges
          .pipe(
            filter(value => value.length > 1),
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

  public removeAuthor(deletedAuthor: IAuthor): IAuthor[] {
    return this.authorsList = this.authorsList.filter((author: IAuthor) => author.id !== deletedAuthor.id);
  }

  public addAuthorHandler(selectAuthor: IAuthor) {
    const presence = this.authorsList.some( (author: IAuthor) => author.id === selectAuthor.id );
    if (!presence) {
      this.authorsList.push(selectAuthor);
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

}
