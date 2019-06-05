import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetColorDirective } from './set-color.directive';

@NgModule({
  declarations: [SetColorDirective],
  imports: [
    CommonModule
  ],
  exports: [SetColorDirective]
})
export class SharedModule { }
