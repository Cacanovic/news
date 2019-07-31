import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let date=moment.unix(value).format("YYYY-MM-DD HH:mm");
    return moment(date, "YYYY-MM-DD HH:mm").fromNow();
  }

}
