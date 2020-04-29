import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SenchaUiService } from '../../lib/sencha-ui.service';
import { Subscription } from 'rxjs';
import { SenchaColorTheme, SenchaElement } from '../../types';

export type SenchaButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning';

export type SenchaButtonRole = 'submit' | 'button' | 'reset';

@Component({
  selector: 'sencha-button',
  templateUrl: 'sencha-button.component.html',
  styleUrls: ['sencha-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SenchaButtonComponent implements OnInit, OnDestroy, SenchaElement {
  @Input() type: SenchaButtonType = 'primary';
  @Input() role: SenchaButtonRole = 'button';
  @Input() disabled = false;
  @Input() fluid = false;
  @Input() id: string;
  @Input() loading = false;
  @Input() accessibilityLabel: string;

  sub: Subscription;
  theme: SenchaColorTheme;
  constructor(private commonService: SenchaUiService) {}

  ngOnInit() {
    this.sub = this.commonService.UIThemeChange().subscribe((val) => {
      this.theme = val;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
