import { Injectable } from '@angular/core';
import { SenchaColorTheme, ThemeContext } from '../types';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_THEME: SenchaColorTheme = {
  primary: {
    text: '#fff',
    background: '#007bff',
    activated: {
      text: '#fff',
      background: '#0069d9',
    },
  },
  secondary: {
    background: '#6c757d',
    text: '#fff',
  },
  danger: {
    background: '#dc3545',
    text: '#fff',
  },
  info: {
    background: '#17a2b8',
    text: '#fff',
  },
  warning: {
    background: '#ffc107',
    text: '#fff',
  },
  success: {
    background: '#28a745',
    text: '#fff',
  },
};

@Injectable({
  providedIn: 'root',
})
export class SenchaUiService {
  private _uiTheme: SenchaColorTheme = DEFAULT_THEME;
  private _uiThemeSub: BehaviorSubject<SenchaColorTheme> = new BehaviorSubject(
    this._uiTheme
  );

  constructor() {}

  public setUITheme(theme: SenchaColorTheme) {
    this._uiTheme = theme;
    this._uiThemeSub.next(theme);
  }

  public UIThemeChange() {
    return this._uiThemeSub.asObservable();
  }
}
