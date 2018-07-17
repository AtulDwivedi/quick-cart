import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpringComponent } from './spring/spring.component';
import { DemoMaterialModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpringComponent],
  exports: [SpringComponent]
})
export class MenuModule { }
