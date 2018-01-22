import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeatherIconsComponent } from './weather-icons.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WeatherIconsComponent],
  exports: [WeatherIconsComponent]
})
export class WeatherIconsModule { }
