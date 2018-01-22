import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wi',
  template: `
    <i class="wi wi-{{name}}" [ngClass]="options" aria-hidden="true"></i>
  `
})

export class WeatherIconsComponent implements OnInit {
  
  @Input() public name: string;
  @Input() public size?: string;
  @Input() public fixed?: boolean;
  @Input() public rotate?: number;
  @Input() public flip?: string;
  @Input() public direction?: string;
  @Input() public degree?: number | string;
  @Input() public beufort?: number;

  private _options: string[] = [];

  public ngOnInit() {

    if (!this.name) { throw new Error('Missing name for Weather Icons Component'); }

    if (this.size) { this.addOption(`wi-${this.size}`); }

    if (this.fixed) { this.addOption(`wi-fw`); }

    if (this.rotate === 90 || 180 || 270) {
      this.addOption(`wi-rotate-${this.rotate}`);
    }

    if (this.flip === ('horizontal' || 'vertical')) { this.addOption(`wi-flip-${this.flip}`); }

    if (this.name === 'wind' && this.direction === ('towards' || 'from')) {

      if (typeof this.degree === 'string') {
        this.name = `wi-${this.name}-${this.direction}-${this.degree}`;
      } else {
        this.name = (`wi-${this.name}-${this.direction}-${this.degree}-deg`);
      }

    } else if (this.name === 'wind-beufort' && this.beufort) {
      this.name = `wi-${this.name}-${this.beufort}`;
    }


  }

  get options() {
    return this._options;
  }

  private addOption(addClass: string): void {
    this._options.push(addClass);
  }
}
