import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/shared/theme.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector:'app-theme-toggle',
  templateUrl:'./theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, private app: AppComponent) { 
    app.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);

  }
}