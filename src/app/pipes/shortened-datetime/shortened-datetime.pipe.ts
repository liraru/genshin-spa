import { Pipe, PipeTransform } from '@angular/core';
import { StringDateHelper } from 'src/app/helpers/string-date.helper';

@Pipe({ name: 'shortened' })
export class ShortenedDatetimePipe implements PipeTransform {
  transform(long: string): string {
    return StringDateHelper.LongToShortDatetime(long);
  }
}
