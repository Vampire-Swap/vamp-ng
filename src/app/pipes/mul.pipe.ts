import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mul'
})
export class MulPipe implements PipeTransform {

  transform(value: string, mul: string): string {
    return (parseFloat(value) * parseFloat(mul)).toFixed(2);
  }

}
