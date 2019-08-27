import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {

	selectedTopicName: string = ""

  	constructor(public app :AppComponent) {
	}

	updateButtonName(topicName: string): string {
		return (topicName === "RPG Battle Framework") ? "" : topicName
	}

	ngOnInit() {
	}

}
