import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from 'lodash-es';
@Pipe({
  name: 'shorten',
  standalone: true
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, len: number = 100): string {
    return truncate(value, {length: len});
  }

}
