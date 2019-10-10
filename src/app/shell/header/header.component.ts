import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import { ThemeService } from 'src/app/shared/theme.service';
// import { of } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	selectedTopicName: string = ""

	constructor(public app :AppComponent, public theme :ThemeService) { 
	}

	updateButtonName(topicName: string): string {
		return (topicName === "RPG Battle Framework") ? "" : topicName
	}

	ngOnInit() { }

}
