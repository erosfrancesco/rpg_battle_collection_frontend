import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  	service :any

	constructor(private appComponent: AppComponent) { 
		appComponent.navTitle = "Commands"
	}

	ngOnInit() {
	}
}
