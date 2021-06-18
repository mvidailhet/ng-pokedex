import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string | undefined): unknown {
    return value && value.substr(0, 3) + "...";
  }

}
