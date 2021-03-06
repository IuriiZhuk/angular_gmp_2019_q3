import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {IAuthor} from '../../courses/models/course';
import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {CoursesState, getAuthors} from '../../courses/+store/reducers/courses.reducers';
import * as CourseActions from '../../courses/+store/actions/courses.actions';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsInputComponent),
      multi: true,
    },
  ],
})
export class TagsInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  public subscription = new Subscription();
  public showAvailableAuthors = false;
  public tagsForm = this.fb.group({
    tagInput: [''],
    authors: this.fb.array([], Validators.required),
  });

  public availableAuthors: IAuthor[];

  constructor(
    private fb: FormBuilder,
    private store: Store<CoursesState>,
  ) {
  }

  get tagInput() {
    return this.tagsForm.get('tagInput');
  }
 get authorsInput() {
    return this.tagsForm.get('authors');
  }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(getAuthors)).subscribe(
      (authors: IAuthor[]) => {
        this.availableAuthors = authors;
        this.showAvailableAuthors = true;
      }
    ));

    this.subscription.add(
      this.tagsForm.get('tagInput').valueChanges
          .pipe(
            filter(value => {
              this.showAvailableAuthors = value && !!value.length;
              return value && value.length > 1;
            }),
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
    this.onChange(this.authorsInput.value);
    this.onTouched();
  }

  public addAuthorHandler(selectAuthor: IAuthor) {

    const duplicate =
      this.tagsForm.get('authors')
          .value
          .some((author: IAuthor) => author.id === selectAuthor.id);
    if (!duplicate) {
      this.authors.push(this.fb.control({
        name: `${selectAuthor.name}`,
        id: selectAuthor.id,
      }));

      this.onChange(this.authorsInput.value);
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

  get authors(): FormArray {
    return this.authorsInput as FormArray;
  }

  private onTouched = () => {
  };

  private onChange: (value) => void = () => {
  };

  public writeValue({courseAuthors, tagInput}): void {
    if (courseAuthors && courseAuthors.length) {
      courseAuthors.forEach( (author: IAuthor) => this.addAuthorHandler(author));
    }
    this.tagInput.setValue(tagInput);
  }

  public registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  public onClearSearchHandler() {
    this.tagInput.setValue('');
  }

}
