import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressFmt'
})
export class AddressFmtPipe implements PipeTransform {

  transform(value: string): string {
    return value.substr(0,5) + '...' + value.substr(value.length-5, value.length);
  }

}
