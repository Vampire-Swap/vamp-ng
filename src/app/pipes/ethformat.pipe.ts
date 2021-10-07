import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ethformat'
})
export class EthformatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return (parseFloat(value) / Math.pow(10, 18)).toFixed(2);
  }

}
