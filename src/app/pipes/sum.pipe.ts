import { Pipe, PipeTransform } from '@angular/core';
import { PairQuote } from '../utils/PairQuote';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: Array<PairQuote>, ...args: unknown[]): string {
    return value.reduce((a,b) => a + parseFloat(b.reserveUSD), 0).toFixed(2);
  }

}
