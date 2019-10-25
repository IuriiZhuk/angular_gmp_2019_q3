import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public inputValue: string;
  constructor() { }

  ngOnInit() {
  }

  public onSearchHandler(inputValue: string) {
    console.log(inputValue);
    this.inputValue = '';
  }

}
