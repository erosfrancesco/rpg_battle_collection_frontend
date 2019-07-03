import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-battleobjects-list',
  templateUrl: './battleobjects-list.component.html',
  styleUrls: ['./battleobjects-list.component.css']
})
export class BattleobjectsListComponent implements OnInit {

	service :any 

	constructor(private appComponent: AppComponent) { 
		appComponent.navTitle = "Battle Objects"
	}

	ngOnInit() {
	}
}
