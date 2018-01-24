import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  constructor() {}

  transform(value: any, length: number) {
    if(value.length > length)
    {
      return value.substring(0, length - 3) + "...";
    }
    else
    {
      return value;
    }
  }
}
