import { Injectable } from '@angular/core';
import { SenchaColorTheme, ThemeContext } from '../types';
import { BehaviorSubject } from 'rxjs';
import { tinycolor } from '../utilities/tiny-colors';

const DARKEN_VALUE = 8;

// Default theme used if no additional theme color is defined
// Colors inspired by Bootstrap UI
const DEFAULT_THEME: SenchaColorTheme = {
  primary: {
    text: '#fff',
    background: '#1890ff',
  },
  secondary: {
    background: '#8c8c8c',
    text: '#fff',
  },
  danger: {
    background: '#f5222d',
    text: '#fff',
  },
  info: {
    background: '#13c2c2',
    text: '#fff',
  },
  warning: {
    background: '#faad14',
    text: '#fff',
  },
  success: {
    background: '#52c41a',
    text: '#fff',
  },
  background: '#fefefe',
  text: '#212b36',
};

/**
 * SenchaUI Configuration Service
 *
 * By using this service you can modify the UI Kit color theme
 * on the fly.
 *
 * **Service is provided at root level, do not manually provide
 * the service at application level.**
 */
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
    this._uiTheme = Object.assign(this._uiTheme, theme);
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
    background,
    text,
  }: SenchaColorTheme) {
    if (primary) {
      _setContextStyle('primary', primary);
    }
    if (secondary) {
      _setContextStyle('secondary', secondary);
    }
    if (info) {
      _setContextStyle('info', info);
    }
    if (danger) {
      _setContextStyle('danger', danger);
    }
    if (success) {
      _setContextStyle('success', success);
    }
    if (warning) {
      _setContextStyle('warning', warning);
    }

    if (background) {
      document.documentElement.style.setProperty(
        `--s-background-color`,
        background
      );
    }

    if (text) {
      document.documentElement.style.setProperty(`--s-text-color`, text);
    }
  }
}

/**
 * Store the matching color in the browser root.
 *
 * @param key the color key usually a single word
 * @param data The color data object
 */
function _setContextStyle(key: string, data: ThemeContext) {
  document.documentElement.style.setProperty(
    `--s-${key}-background-color`,
    data.background
  );
  document.documentElement.style.setProperty(
    `--s-${key}-activated-color`,
    new tinycolor(data.background).darken(DARKEN_VALUE).toHexString()
  );
  document.documentElement.style.setProperty(
    `--s-${key}-text-color`,
    data.text
  );
}
