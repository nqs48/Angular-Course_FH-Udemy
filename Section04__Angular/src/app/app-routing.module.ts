import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent,  pathMatch: 'full'},
  { path: 'counter', component: CounterComponent, pathMatch: 'full'},
  { path: 'directives', component: DirectivesComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
