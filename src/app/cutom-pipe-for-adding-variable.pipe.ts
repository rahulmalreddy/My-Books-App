import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutomPipeForAddingVariable'
})
export class CutomPipeForAddingVariablePipe implements PipeTransform {

  transform(value: string): string {
    value = value +"reddy";
    return value;
  }

}
