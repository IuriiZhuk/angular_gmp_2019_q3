import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlightedRelevant]'
})
export class HighlightedRelevantDirective implements AfterViewInit {

  @Input('appHighlightedRelevant') creationDate: string;
  constructor(private elRef: ElementRef) { }

  private isUpcoming(date: string): boolean {
    const currentDate = Date.now();
    const creationDate = Date.parse(date);
    const secondsInTwoWeeks: number = 14 * 24 * 60 * 60 * 3600;
    return (creationDate < currentDate) && (creationDate >= (currentDate - secondsInTwoWeeks));
  }

  private isFresh(date: string): boolean {
    const currentDate = Date.now();
    const creationDate = Date.parse(date);
    return creationDate > currentDate;
  }

  public ngAfterViewInit() {
    const isUpcoming = this.isUpcoming(this.creationDate);
    const isFresh = this.isFresh(this.creationDate);
    this.elRef.nativeElement.style.border = isFresh ? '1px solid blue' : (isUpcoming ? '1px solid green' : '');
  }

}
