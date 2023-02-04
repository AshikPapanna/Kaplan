import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    if (!value || !args) {
      return value;
  }
  return value.filter(item => item.volumeInfo.title.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }

}
