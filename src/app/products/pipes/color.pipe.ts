import { Pipe, PipeTransform } from '@angular/core';
import { IHero, eColor } from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: eColor): 'red' | 'black' | 'blue' | 'green' | 'invisible' {
    switch (value) {
      case eColor.black:
        return 'black'
      case eColor.blue:
        return 'blue'
      case eColor.green:
        return 'green'
      case eColor.red:
        return 'red'
      default:
        return  'invisible'
    }
  }
}