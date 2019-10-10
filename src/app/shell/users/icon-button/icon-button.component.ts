import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  constructor(public app :AppComponent, public theme: ThemeService) {
	}

  ngOnInit() {
  }

}
