import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];


  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
          label: 'Dates & texts',
          icon: 'pi pi-align-left',
          routerLink: ['/']
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: ['/numbers']
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: ['/uncommon']
          }
        ]
      },
      {
        label: 'Customized Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];
  }

}