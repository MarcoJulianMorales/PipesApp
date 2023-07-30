import { Component } from '@angular/core';
import { IHero, eColor } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy: keyof IHero | '' = '';

  public heroes: IHero [] = [
    {
      name: 'Goku',
      canFly: true,
      color: eColor.red
    },{
      name: 'Levi',
      canFly: false,
      color: eColor.green
    },{
      name: 'Eren',
      canFly: false,
      color: eColor.black
    },{
      name: 'Eleven',
      canFly: true,
      color: eColor.blue
    },
  ]

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeSortBy(value: keyof IHero): void {
    this.sortBy = value;
  }
}