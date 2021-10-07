import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd'
})
export class UsdPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return "$" + value;
  }

}
