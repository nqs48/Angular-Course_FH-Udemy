import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  confirmation: boolean = false;
  deletedHero: string | undefined;

  listHeroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  deleteHero(): void {
    this.deletedHero= this.listHeroes.pop();
    this.confirmation = true;
    setTimeout(() => {
      this.confirmation = false;
    }
    , 600);
  }


}
