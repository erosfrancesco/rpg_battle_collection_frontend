import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

	selectedTopicName: string = ""

  	constructor(public app :AppComponent, public theme: ThemeService) {
	}

	updateButtonName(topicName: string): string {
		return (topicName === "RPG Battle Framework") ? "" : topicName
	}

	ngOnInit() {
		// this.app.themeIsDark = this.theme.loadConfig()
	}

}
