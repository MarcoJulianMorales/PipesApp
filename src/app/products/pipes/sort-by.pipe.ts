import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: IHero[], sortBy: keyof IHero | '' = '' ): IHero[] {
    return sortBy !== '' ? heroes.sort((a,b)=> a[sortBy] > b[sortBy] ? 1 : -1) : heroes;
  }
}