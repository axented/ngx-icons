import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemifyComponent } from './themify.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ThemifyComponent],
  exports: [ThemifyComponent]
})
export class ThemifyModule { }
