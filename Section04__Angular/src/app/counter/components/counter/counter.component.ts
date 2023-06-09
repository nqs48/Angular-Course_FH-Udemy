import { Component } from '@angular/core';


@Component({
  selector:'app-counter',
  template: `
  <div class="d-flex justify-content-center">
    <div>
      <h2>Contador: {{ counter }}</h2>
      <button (click)="disminuir()" style = "padding: 1rem; background-color: cadetblue ;" > -</button>
      <button (click)="aumentar($event)" style = "padding: 1rem; background-color: aquamarine; margin: 0.3rem;" > +</button>
      <button (click)="reiniciar()"> Limpiar </button>
    </div>
  </div>`

})
export class CounterComponent{

  
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