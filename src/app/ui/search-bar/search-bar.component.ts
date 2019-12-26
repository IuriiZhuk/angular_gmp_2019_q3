import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public inputValue: string;
  @Output() public searchValue = new EventEmitter(true);
  constructor() { }

  public onSearchHandler(inputValue: string) {
    this.searchValue.emit(inputValue.trim());
  }

}
