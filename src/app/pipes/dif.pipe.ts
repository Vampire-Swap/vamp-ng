import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dif'
})
export class DifPipe implements PipeTransform {

  transform(value: string, sub: string): string {
    return (parseFloat(value) - (parseFloat(sub) / Math.pow(10, 18))).toFixed(2);
  }

}
