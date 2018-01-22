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
  @Input() public degree?: number
  @Input() public cardinal?: string;
  @Input() public beaufort?: number;
  @Input() public time?: number;

  private _options: string[] = [];

  public ngOnInit() {

    if (!this.name) { throw new Error('Missing name for Weather Icons Component'); }

    if (this.name === 'wind' && !this.direction) { this.direction = 'towards'; }
    if (this.name === 'wind' && !this.cardinal && !this.degree) { this.degree = 0; }
    if (this.name === 'time' && (!this.time || this.time < 1 || this.time > 12)) { this.time = 1; }

    if (this.fixed) { this.addOption(`wi-fw`); }

    if (this.rotate === 90 || this.rotate === 180 || this.rotate === 270) {
      this.addOption(`wi-rotate-${this.rotate}`);
    }

    if (this.flip === 'horizontal' || this.flip === 'vertical') { this.addOption(`wi-flip-${this.flip}`); }

    if (this.name === 'wind' && (this.direction === 'towards' || this.direction === 'from')) {

      if (this.degree) {
        this.addOption(`${this.direction}-${this.degree}-deg`);

      } else if (this.cardinal) {
        this.addOption(`wi-${this.direction}-${this.cardinal}`);

      }

    } else if (this.name === 'wind-beaufort') {

      if (!this.beaufort || (this.beaufort > 11 || this.beaufort < 0)) { this.beaufort = 0; }
      this.name = `${this.name}-${this.beaufort}`;

    } else if (this.name === 'time') {
      this.name = `${this.name}-${this.time}`;
    }

    console.log('Weather Icons:');
    console.log('wi wi-' + this.name);
    console.log(this._options);
  }

  get options() {
    return this._options;
  }

  private addOption(addClass: string): void {
    this._options.push(addClass);
  }
}
