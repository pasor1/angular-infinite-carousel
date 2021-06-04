import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toReadableDuration'
})
export class ToReadableDurationPipe implements PipeTransform {

  transform(duration: number): string {
    const hours = Math
      .floor(duration / 3600).toString();
    const minutes = Math
      .floor((duration % 3600) / 60)
      .toString();
    const seconds = (duration % 60).toString()
      .padStart(2, '0');
    if (duration >= 3600) {
      return `${hours}h ${minutes}min`;
    }
    return `${minutes}:${seconds}`;
  }

}
