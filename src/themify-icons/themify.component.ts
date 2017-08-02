import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ti',
  template: `
    <span class="ti-{{name}}" aria-hidden="true"></span>
  `
})

export class ThemifyComponent implements OnInit {
  @Input() private name: string;
  private _options: string[] = [];

  public ngOnInit() {
    if (!this.name) {
      throw new Error('Missing name for Themify icon Component');
    }
  }
}
