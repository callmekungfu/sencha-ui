import { Injectable } from '@angular/core';
import { SenchaColorTheme, ThemeContext } from '../types';
import { BehaviorSubject } from 'rxjs';
import { tinycolor } from '../utilities/tiny-colors';

const DEFAULT_THEME: SenchaColorTheme = {
  primary: {
    text: '#fff',
    background: '#007bff',
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
    text: '#333',
  },
  success: {
    background: '#28a745',
    text: '#fff',
  },
  background: '#fefefe',
  text: '#333',
};

@Injectable({
  providedIn: 'root',
})
export class SenchaUiService {
  private _uiTheme: SenchaColorTheme = DEFAULT_THEME;
  private _uiThemeSub: BehaviorSubject<SenchaColorTheme> = new BehaviorSubject(
    this._uiTheme
  );

  constructor() {
    this._updateWebAPICSSVariables(DEFAULT_THEME);
  }

  public setUITheme(theme: SenchaColorTheme) {
    this._uiTheme = theme;
    this._updateWebAPICSSVariables(theme);
    this._uiThemeSub.next(theme);
  }

  public UIThemeChange() {
    return this._uiThemeSub.asObservable();
  }

  private _updateWebAPICSSVariables({
    primary,
    danger,
    info,
    secondary,
    success,
    warning,
  }: SenchaColorTheme) {
    console.log(new tinycolor(primary.background).darken(20).toHexString());
    if (primary) {
      setContextStyle('primary', primary);
    }
    if (secondary) {
      setContextStyle('secondary', secondary);
    }
    if (info) {
      setContextStyle('info', info);
    }
    if (danger) {
      setContextStyle('danger', danger);
    }
    if (success) {
      setContextStyle('success', success);
    }
    if (warning) {
      setContextStyle('warning', warning);
    }
  }
}

function setContextStyle(key: string, data: ThemeContext) {
  document.documentElement.style.setProperty(
    `--s-${key}-background-color`,
    data.background
  );
  document.documentElement.style.setProperty(
    `--s-${key}-activated-color`,
    new tinycolor(data.background).darken(10).toHexString()
  );
  document.documentElement.style.setProperty(
    `--s-${key}-text-color`,
    data.text
  );
}
