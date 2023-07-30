import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Does fly' | 'Does not fly' {
    return value ? 'Does fly' : 'Does not fly';
  }

}