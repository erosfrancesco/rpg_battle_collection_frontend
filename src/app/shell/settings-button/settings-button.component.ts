import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent implements OnInit {

  constructor(public app :AppComponent, public theme: ThemeService) {
	}

  ngOnInit() {
  }

}
