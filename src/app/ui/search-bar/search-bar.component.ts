import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public inputValue: string;
  @Output() public searchValue = new EventEmitter(true);
  constructor() { }

  ngOnInit() {
  }

  public onSearchHandler(inputValue: string) {
    console.log(inputValue);
    this.searchValue.emit(inputValue);
    this.inputValue = '';
  }

}
