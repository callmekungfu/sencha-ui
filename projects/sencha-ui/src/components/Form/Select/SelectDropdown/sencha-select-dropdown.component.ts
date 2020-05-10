import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  selector: 'sc-dropdown-container',
  templateUrl: 'sencha-select-dropdown.component.html',
  animations: [
    trigger('dropdownDisplay', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
        })
      ),
      transition('* => *', animate(ANIMATION_TIMINGS)),
    ]),
  ],
})
export class SenchaSelectDropdownComponent implements OnInit {
  animationState: 'open' | 'closed' = 'closed';
  constructor() {}

  ngOnInit() {
    this.animationState = 'open';
  }
}
