import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string | undefined, nbCaractersToRemove?: number): unknown {
    return value && value.substr(0, nbCaractersToRemove || 3) + "...";
  }

}
