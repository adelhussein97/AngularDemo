import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardvisa'
})
export class FormatCardvisaPipe implements PipeTransform {

 transform(value: string): string {
    
     return `${value.substring(0, 4)}-${value.substring(4, 8)}-${value.substring(8, 12)}-${value.substring(12, 16)}`
    
  }

}
