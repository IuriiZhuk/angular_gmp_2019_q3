import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const residualMinutes = value - hours * 60;
    return value < 60 ? `${value} mm` : `${hours} h ${residualMinutes} mm`;
  }

}
