import {Component, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public inputValue: string;
  public subscription = new Subscription();
  @Output() public searchValue = new EventEmitter(true);

  public searchForm = this.fb.group({
    searchInput: [''],
  });

  get searchInput() {
    return this.searchForm.get('searchInput');
  }

  constructor(
    private fb: FormBuilder,
  ) {
  }

  public ngOnInit() {
    this.subscription.add(
      this.searchInput.valueChanges
          .pipe(
            map((value: string) => value.trim()),
            filter(value => value.length > 2),
            debounceTime(700),
            distinctUntilChanged(),
          )
          .subscribe(((term: string) => this.searchValue.emit(term)))
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
