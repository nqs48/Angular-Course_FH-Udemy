import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public title: string = 'Mi primera App de Angular';

  public counter: number = 10;

  constructor() { }


  aumentar(e: Event): void {
    this.counter++;
    console.log(e);
  }

  disminuir(): void {
    this.counter--;
  }

  reiniciar(): void {
    this.counter = 10;
  }
 
}
