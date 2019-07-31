import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberK'
})
export class NumberKPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newNumber = JSON.stringify(value);
    if (value >= 1000) {
      newNumber = JSON.stringify(Math.round((value / 1000) * 10) / 10) + 'k';
    }

    return newNumber;
  }

}
