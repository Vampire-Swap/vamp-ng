import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberFormatterService {

  constructor() { }

  private SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

  public abbreviateNumber(value: number): string {

    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(value)) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return value.toFixed(2);

    // get suffix and determine scale
    var suffix = this.SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = value / scale;

    // format number and add suffix
    return scaled.toFixed(2) + suffix;
  }
}
