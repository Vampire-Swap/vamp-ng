import { Pipe, PipeTransform } from '@angular/core';
import { NumberFormatterService } from '../services/number-formatter.service';

@Pipe({
  name: 'kformat'
})
export class KformatPipe implements PipeTransform {

  constructor(private numberFormatter: NumberFormatterService){}

  transform(value: string, ...args: unknown[]): string {
    if (value === "inf") {
      return "∞";
    }

    return this.numberFormatter.abbreviateNumber(parseFloat(value));
  }

}
