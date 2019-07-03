import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-ai-list',
  templateUrl: './ai-list.component.html',
  styleUrls: ['./ai-list.component.css']
})
export class AiListComponent implements OnInit {

	service :any

	constructor(private appComponent: AppComponent) {
	}

	ngOnInit() {
	}

}
