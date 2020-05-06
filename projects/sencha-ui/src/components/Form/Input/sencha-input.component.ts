import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-input',
  templateUrl: 'sencha-input.component.html',
  styleUrls: ['sencha-input.component.scss'],
})
export class SenchaInputComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;
  @Input() maxLength: number;
  @Input() type = 'text';
  @Input() ngModel: any;
  @Input() set disabled(value: boolean | string) {
    this._disabled = value !== false && value !== 'false';
  }

  @Output() ngModelChange = new EventEmitter();

  _disabled = false;
  constructor() {}

  ngOnInit() {}

  onModelChange(value: any) {
    this.ngModelChange.emit(value);
  }
}
