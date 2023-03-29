import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcBirthdate'
})
export class CalcBirthdatePipe implements PipeTransform {

   transform(value: string, birthdatePart: string): string {
    switch (birthdatePart) {
      case "YY":
        return `19${value.substring(1, 3)}`;
      case "MM":
        return value.substring(3, 5);
      case "DD":
        return value.substring(5, 7);
      case "FullDate":
        return `${value.substring(5, 7)}-${value.substring(3, 5)}-19${value.substring(1, 3)}`
    }

    return value;
  }

}
