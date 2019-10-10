import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(this.loadDarkThemeConfig());
  isDarkTheme = this._darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
    this._darkTheme.next(isDarkTheme);
  }

  loadDarkThemeConfig() :boolean {
    return localStorage.getItem("theme") === "dark"
  }

  getDarkTheme() {}
}