import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18select
  public name: string = 'Marco';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changePerson(): void{
    this.name = this.name == 'Marco' ? 'Melissa' : 'Marco';
    this.gender = this.gender == 'male' ? 'female': 'male';
  }

  //i18plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Marco'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  //json && keyvalue
  public person = {
    'name': 'Marco',
    'age': 26,
    'address': 'home'
  }

  //Async pipe
  public myObservableTimer: Observable<number> = interval(2000)
  .pipe(
    tap(value => {
      console.log('tap: ', value)
    })
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('We have the promise resolved.')
    }, 3000);
  })
}
