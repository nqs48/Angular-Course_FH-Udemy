import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalDirComponent } from './components/conditional-dir/conditional-dir.component';
import { DirectivesComponent } from './directives.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConditionalDirComponent, DirectivesComponent],
  exports: [ConditionalDirComponent]

})
export class DirectivesModule { }
 