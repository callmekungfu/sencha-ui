import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'sc-column',
  templateUrl: 'sencha-column.component.html',
  styleUrls: ['sencha-column.component.scss'],
})
export class SenchaColumnComponent implements OnInit, OnChanges {
  @Input() xl: number;
  @Input() lg: number;
  @Input() md: number;
  @Input() sm: number;
  @Input() xs: number;

  columnClasses: string[];
  constructor() {}

  ngOnInit() {
    this.columnClasses = this.calculateColumnBreakpoints();
  }

  ngOnChanges() {
    this.columnClasses = this.calculateColumnBreakpoints();
  }

  calculateColumnBreakpoints(): string[] {
    const { xl, lg, md, sm, xs } = this;
    const values = [xl, lg, md, sm, xs];
    const valuesMapped = { xl, lg, md, sm, xs };
    const hasZero = values.includes(0);
    let breakpoints = [];
    if (!xl && !lg && !md && !sm && !xs) {
      breakpoints = ['col'];
    }
    if (hasZero) {
      if (xs === 0) {
        breakpoints = [...breakpoints, 'd-none'];
      }
      if (sm === 0) {
        breakpoints = [...breakpoints, 'd-sm-none'];
      } else {
        breakpoints = [...breakpoints, 'd-sm-block'];
      }
      if (md === 0) {
        breakpoints = [...breakpoints, 'd-md-none'];
      } else {
        breakpoints = [...breakpoints, 'd-md-block'];
      }
      if (lg === 0) {
        breakpoints = [...breakpoints, 'd-lg-none'];
      } else {
        breakpoints = [...breakpoints, 'd-lg-block'];
      }
      if (xl === 0) {
        breakpoints = [...breakpoints, 'd-xl-none'];
      } else {
        breakpoints = [...breakpoints, 'd-xl-block'];
      }
    }

    for (const key in valuesMapped) {
      if (valuesMapped.hasOwnProperty(key)) {
        const value = valuesMapped[key];
        // If values is not falsy (0, undefined, null)
        if (key === 'xs' && value) {
          breakpoints = [...breakpoints, `col-${value}`];
        } else if (value) {
          breakpoints = [...breakpoints, `col-${key}-${value}`];
        }
      }
    }

    return breakpoints;
  }
}
