import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-container',
  templateUrl: 'sencha-container.component.html',
  styleUrls: ['sencha-container.component.scss'],
})
export class SenchaContainerComponent implements OnInit {
  @Input() fluid = false;

  constructor() {}

  ngOnInit() {}
}
