import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLowerCase = 'marco julian morales';
  public nameUpperCase = 'MARCO JULIAN MORALES';
  public fullName = 'Marco Julian Morales';
  public customDate: Date = new Date();
}
