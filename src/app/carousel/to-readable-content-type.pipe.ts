import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toReadableContentType'
})
export class ToReadableContentTypePipe implements PipeTransform {

  transform(value: string): string {
    const contentTypesMap = {
      video: 'VIDEO',
      elearning: 'ELEARNING',
      learning_plan: 'LEARNING PLAN',
      playlist: 'PLAYLIST',
    };
    return contentTypesMap[value];
  }

}
