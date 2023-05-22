import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  age : number = 45;
  name: string = "Nestea";


  get CapitalizedName(): string{
    return this.name.toUpperCase();
  }

  getCompleteName():string{
    return `${this.name} - ${this.age}`
  }

  changeHeroName(): void{
    this.name= this.name === 'Nestea'? 'Spiderman' : 'Nestea';
    
  }

  changeHeroAge(): void{
    this.age= this.age === 45 ? 27 : 45;
  }

  reiniciar(): void {
    this.age = 45;
    this.name = "Nestea";
  }

}
