import { Component, OnInit, OnDestroy } from '@angular/core';
import { SenchaUiService } from '../../lib/sencha-ui.service';
import { Subscription } from 'rxjs';
import { SenchaColorTheme, SenchaElement } from '../../types';

@Component({
  selector: 'sencha-button',
  templateUrl: 'sencha-button.component.html',
  styleUrls: ['sencha-button.component.scss'],
})
export class SenchaButtonComponent implements OnInit, OnDestroy, SenchaElement {
  sub: Subscription;
  theme: SenchaColorTheme;
  constructor(private commonService: SenchaUiService) {}

  ngOnInit() {
    this.sub = this.commonService.UIThemeChange().subscribe((val) => {
      console.log(val);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
